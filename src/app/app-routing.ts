import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AskComponent } from "./ask/ask.component";
import { JobsComponent } from "./jobs/jobs.component";
import { MainComponent } from "./main/main.component";
import { NewComponent } from "./new/new.component";
import { ShowComponent } from "./show/show.component";

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'new', component: NewComponent },
    { path: 'ask', component: AskComponent },
    { path: 'show', component: ShowComponent },
    { path: 'jobs', component: JobsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting {
    constructor(
        private router: Router
    ) { }


}