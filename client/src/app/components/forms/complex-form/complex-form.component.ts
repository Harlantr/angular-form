import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'complex-form',
    templateUrl: './complex-form.component.html',
    styleUrls: ['./complex-form.component.css']
})
export class ComplexFormComponent {
    complexForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.complexForm = fb.group({
            'firstName': '',
            'lastName': '',
            'gender': 'Female',
            'hiking': false,
            'running': false,
            'swimming': false
        });
    }

    submitForm(value: any): void {
        console.log('Reactive Form Data: ');
        console.log(value);0
    }
}
