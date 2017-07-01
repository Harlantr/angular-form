import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'validated-form',
  templateUrl: './validated-form.component.html',
  styleUrls: ['./validated-form.component.css']
})
export class ValidatedFormComponent {
    complexForm: FormGroup;

  constructor(fb: FormBuilder){
      this.complexForm = fb.group({
          'firstName': [null, Validators.required],
          'lastName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
          'gender': [null, Validators.required],
          'hiking': false,
          'running': false,
          'swimming': false
      });
  }

  submitForm(value: any): void {
      console.log(value);
  }
}
