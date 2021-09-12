import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { MainComponent } from './main/main.component';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';
import { JobsComponent } from './jobs/jobs.component';
import { AskComponent } from './ask/ask.component';
import { AppRouting } from './app-routing';
import { MainApi } from './shared/api/main.api';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { StoryComponent } from './story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    MainComponent,
    NewComponent,
    ShowComponent,
    JobsComponent,
    AskComponent,
    StoryComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRouting,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [
    MainApi,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
