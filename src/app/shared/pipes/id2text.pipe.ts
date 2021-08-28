import { Pipe, PipeTransform } from "@angular/core";
import { switchMap } from "rxjs/operators";
import { MainApi } from "../api/main.api";
import { Story } from "../types/story.response";

@Pipe({
    name: 'id2Text'
})
export class Id2Text implements PipeTransform {

    constructor(
        private mainApi: MainApi,
    ) { }

    transform(id: string, ...args: any[]) {
        let story: Story;
        this.mainApi.getStory(id).pipe().subscribe(data => {
            // console.log(data.title);
            story.title = data.title;
        });

        return story?.title;
    }

}