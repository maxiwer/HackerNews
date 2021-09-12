import { formatDate } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MainApi } from '../shared/api/main.api';

@Component({
  selector: 'single-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoryComponent implements OnInit {
  // TODO: delete any
  @Input() storyId: any;

  storyTitle = '';
  author = '';
  time = '';
  score = '';
  comments = '';

  constructor(
    private mainApi: MainApi,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.mainApi.getStory(this.storyId).subscribe(
      story => {
        // console.log(`~story: `, story);
        // TODO: change getStory to JSON and change object to regex below
        this.storyTitle = story?.title;
        this.author = story?.by;
        this.time = formatDate(new Date(story?.time * 1000), 'dd/MM/yyyy, EEEE, HH:mm', 'en-US');
        this.score = story?.score; 
        this.comments = story?.descendants; 
      
        this.cd.markForCheck();
      }
    );
  }

}
