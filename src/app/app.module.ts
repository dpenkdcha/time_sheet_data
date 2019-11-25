import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExchangeComponent } from './exchange/exchange.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    ExchangeComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
