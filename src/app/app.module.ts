import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import {PostComponent} from "./post/post.component";
import { Post1Component } from './post1/post1.component';
import {Post4Component} from "./post4/post4.component";

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    Post1Component,
    Post4Component
  ],
    imports: [
      BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
