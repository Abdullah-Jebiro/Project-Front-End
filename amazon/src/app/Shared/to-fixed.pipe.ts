import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'toFixed'
})
export class ToFixed implements PipeTransform{

    transform(value: number):number {
        let x=Math.floor(value);
        if(value>1)
        return value-x>0.5?x+0.5:x;       
        return value;
    }
}