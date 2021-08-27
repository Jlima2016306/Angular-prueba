import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './tittle/tittle.component';
import { FullScreenComponent } from './full-screen/full-screen.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [

    AppComponent,
    TitleComponent,
    FullScreenComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
