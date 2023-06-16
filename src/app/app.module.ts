import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeveloperListComponent } from './developer-list/developer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DeveloperCardComponent } from './developer-card/developer-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DeveloperListComponent,
    DeveloperCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
