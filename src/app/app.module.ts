import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PinsComponent } from './pins/pins.component';
import { AppRoutingModule } from './/app-routing.module';
import { BoardsComponent } from './boards/boards.component';
import { BoarditemComponent } from './boarditem/boarditem.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PinsComponent,
    BoardsComponent,
    BoarditemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
