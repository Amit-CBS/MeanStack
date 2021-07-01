import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from  '@angular/forms';//imported for <input [(ngModel)]='name'/> in display.component.html

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { SquarerootPipe } from './squareroot.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    SquarerootPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //imported for <input [(ngModel)]='name'/> in display.component.html
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//This is the root module. Module contains components