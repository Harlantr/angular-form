import { NgModule } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ComplexFormComponent } from './components/forms/complex-form/complex-form.component';
import { SimpleFormComponent } from './components/forms/simple-form/simple-form.component';
import { ValidatedFormComponent } from './components/forms/validated-form/validated-form.component';
import { FormsComponent } from './components/forms/forms.component';
import { HttpObservablesComponent } from './components/http-observables/http-observables.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';

import {EmitterService} from './emitter.service';
import { TextMultiplierComponent } from './components/text-multiplier/text-multiplier.component';

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
        path: 'text-multiplier',
        component: TextMultiplierComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
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
        HomeComponent,
        TextMultiplierComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        EmitterService
    ]
})
export class AppModule { }
