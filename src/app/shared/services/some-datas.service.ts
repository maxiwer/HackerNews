import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SomeDatasService {
  startingPost = 0;
  postsCount = 10;
  totalLength = 0;
  currentPage: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }
}
