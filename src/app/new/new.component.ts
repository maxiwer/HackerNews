import { Component, OnInit } from '@angular/core';
import { MainApi } from '../shared/api/main.api';
import { SomeDatasService } from '../shared/services/some-datas.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
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
    this.mainApi.getNewStories().subscribe(data => {
      // console.log(`~getAsks: `, data);

      this.someDatas.totalLength = data.length;
      this.allStories = data;

      this.initPaginationConfig(data.length);
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
