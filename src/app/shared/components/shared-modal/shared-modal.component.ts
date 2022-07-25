import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthorInfo} from "../../../../models/author-info.model";

@Component({
  selector: 'app-shared-modal',
  templateUrl: './shared-modal.component.html',
  styleUrls: ['./shared-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharedModalComponent implements OnInit {
  @Input() authorName: string = '';
  @Input() authorInfo?: AuthorInfo;
  @Output() close = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
    console.log(`~AUTHOR_INFO: `, this.authorInfo)
  }

}
