import { Component, OnInit } from '@angular/core';
import { MainApi } from '../shared/api/main.api';
import { SomeDatasService } from '../shared/services/some-datas.service';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {
  config = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: 0
  };
  allStories: string[] = [];
  currentPosts: string[] = [];

  constructor(
    private mainApi: MainApi,
    private someDatas: SomeDatasService,
  ) { }

  ngOnInit(): void {
    this.mainApi.getAsks().subscribe(data => {
      // console.log(`~getAsks: `, data);
      this.initPaginationConfig(data.length);

      this.someDatas.totalLength = data.length;
      this.allStories = data;

    });
  }

  initPaginationConfig(length: number) {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: length
    };
  }

  pageChanged(event: any) {
    this.config.currentPage = event;
  }

}
