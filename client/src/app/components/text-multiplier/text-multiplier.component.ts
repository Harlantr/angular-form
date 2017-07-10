import { Component } from '@angular/core';

@Component({
    selector: 'text-multiplier',
    templateUrl: './text-multiplier.component.html',
    styleUrls: ['./text-multiplier.component.css']
})
export class TextMultiplierComponent {

    constructor() { }

    instances: string[];

    propagateUserString(string: string, numberOfInstances: number): void {
        let newArray: string[] = [];
        for (var i = 0; i < numberOfInstances; i++) {
            newArray.push(string);
        }
        this.instances = newArray;
    }
}
