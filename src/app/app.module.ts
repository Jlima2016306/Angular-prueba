import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './tittle/tittle.component';
import { FullScreenComponent } from './full-screen/full-screen.component';
import { UserCardComponent } from './user-card/user-card.component';

import{ BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { SeconsToTimeFormat} from './pipes/SeconsToTimeFormat.pipe'

import {RedBorder} from './directives/RedBorder.directive'

import { ArticleService } from './services/articles.service';
import { ArticlesComponent } from './articles/articles.component';


@NgModule({
  declarations: [

    AppComponent,
    TitleComponent,
    FullScreenComponent,
    UserCardComponent,
    SeconsToTimeFormat,
    RedBorder,
    ArticlesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
