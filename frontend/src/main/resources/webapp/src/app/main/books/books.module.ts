import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BooksRoutingModule} from './books-routing.module';
import {OntimizeWebModule} from "ontimize-web-ngx";
import {BooksHomeComponent} from "./books-home/books-home.component";
import {BooksDetailComponent} from './books-detail/books-detail.component';
import {SharedModule} from "../../shared/shared.module";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
    imports: [
        CommonModule,
        OntimizeWebModule,
        BooksRoutingModule,
        SharedModule,
        FlexLayoutModule
    ],
    declarations: [
        BooksHomeComponent,
        BooksDetailComponent
    ]
})
export class BooksModule {
}
