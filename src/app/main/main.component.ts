import { Component, OnInit } from '@angular/core';
import { MainApi } from '../shared/api/main.api';
import { SomeDatasService } from '../shared/services/some-datas.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  config = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: 0
  };
  allStories: string[] = [];
  currentPosts: string[] = [];
  modal = false;

  constructor(
    private mainApi: MainApi,
    private someDatas: SomeDatasService,
  ) { }

  ngOnInit(): void {
    this.mainApi.getTopStories().subscribe(data => {
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
