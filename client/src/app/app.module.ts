import { NgModule } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ComplexFormComponent } from './forms/complex-form/complex-form.component';
import { SimpleFormComponent } from './forms/simple-form/simple-form.component';
import { ValidatedFormComponent } from './forms/validated-form/validated-form.component';
import { FormsComponent } from './forms/forms.component';
import { HttpObservablesComponent } from './http-observables/http-observables.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'forms',
        component: FormsComponent
    },
    {
        path: 'http-observables',
        component: HttpObservablesComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        ComplexFormComponent,
        SimpleFormComponent,
        ValidatedFormComponent,
        FormsComponent,
        HttpObservablesComponent,
        PageNotFoundComponent,
        HomeComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: []
})
export class AppModule { }
