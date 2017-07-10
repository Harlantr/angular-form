import { Component } from '@angular/core';

@Component({
  selector: 'simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent {

  constructor() { }

  submitForm(form: any): void {
      console.log('Form Data:');
      console.log(form);
  }
}
