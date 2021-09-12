import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { SECONDARY_URLS } from '../vars/secondary-urls';
import { map, mergeMap, tap, switchMap, flatMap, filter, retry } from 'rxjs/operators';

@NgModule({
    imports: [
        CommonModule
    ]
})
export class MainApi {
    private MAIN_URL = 'https://hacker-news.firebaseio.com/v0/';
    private readonly prettyPrint = 'print=pretty';

    constructor(
        private http: HttpClient,
    ) { }

    getTopStories(): Observable<any> {
        return this.http.get(this.MAIN_URL + SECONDARY_URLS.top + this.prettyPrint);
    }

    getNewStories(): Observable<any> {
        return this.http.get(this.MAIN_URL + SECONDARY_URLS.new + this.prettyPrint);
    }
    
    getAsks(): Observable<any> {
        return this.http.get(this.MAIN_URL + SECONDARY_URLS.ask + this.prettyPrint);
    }

    getShows(): Observable<any> {
        return this.http.get(this.MAIN_URL + SECONDARY_URLS.show + this.prettyPrint);
    }

    getJobs(): Observable<any> {
        return this.http.get(this.MAIN_URL + SECONDARY_URLS.jobs + this.prettyPrint);
    }

    getStory(id: string): Observable<any> {
        return this.http.get(this.MAIN_URL + `item/${id}.json?`)
            // .pipe(map(data => JSON.stringify(data)));
    }
}