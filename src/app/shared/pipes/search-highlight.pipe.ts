import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: "searchHighlight",
})
export class SearchHighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: any, args?: any): any {

    if(!value)return null;
    if(!args)return value;

    args = args.toLowerCase();

    return value.filter(function(item){
        return JSON.stringify(item).toLowerCase().includes(args);
    });
}

}
