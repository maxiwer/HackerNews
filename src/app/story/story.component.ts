import {formatDate} from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, ComponentFactoryResolver,
  Input,
  OnInit, ViewChild, ViewContainerRef,
} from '@angular/core';
import {MainApi} from '../shared/api/main.api';
import {SharedModalComponent} from "../shared/components/shared-modal/shared-modal.component";
import {RefDirective} from "../shared/directives/ref.directive";
import {AuthorInfo} from "../../models/author-info.model";

@Component({
  selector: 'single-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryComponent implements OnInit {
  // FIXME: delete any
  @Input() storyId: any;
  @ViewChild('dynamicComponent', {static: true}) refDir: any;
  authorInfo?: AuthorInfo;

  storyTitle = '';
  author = '';
  time = '';
  score = '';
  comments = '';
  link = '';

  constructor(private mainApi: MainApi,
              private cd: ChangeDetectorRef,
              private resolver: ComponentFactoryResolver,
              private viewContainer: ViewContainerRef) {
  }

  ngOnInit(): void {
    this.mainApi.getStory(this.storyId).subscribe((story) => {
      // TODO: change getStory to JSON and change object to regex below
      this.storyTitle = story?.title;
      this.author = story?.by;
      this.time = formatDate(
        new Date(story?.time * 1000),
        'dd/MM/yyyy, EEEE, HH:mm',
        'en-US'
      );
      this.score = story?.score;
      this.comments = story?.descendants;
      this.link = story?.url;

      this.cd.markForCheck();
    });
  }

  onAuthorClicked(event: any) {
    this.getAuthorInfo();
  }

  getAuthorInfo() {
    this.mainApi.getAuthorInfo(this.author).subscribe(data => {
      this.createModal(data);
    });
  }

  createModal(author: AuthorInfo) {
    const modalFactory = this.resolver.resolveComponentFactory(SharedModalComponent);
    // const component = this.refDir.createComponent(modalFactory);
    const component = this.viewContainer.createComponent(modalFactory);
    component.instance.authorName = this.author;
    component.instance.authorInfo = author;
    component.instance.close.subscribe(() => {
      this.viewContainer.clear();
    });
  }
}
