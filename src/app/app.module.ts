import { NgModule } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComplexFormComponent } from './complex-form/complex-form.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { ValidatedFormComponent } from './validated-form/validated-form.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        ComplexFormComponent,
        SimpleFormComponent,
        ValidatedFormComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: []
})
export class AppModule { }
