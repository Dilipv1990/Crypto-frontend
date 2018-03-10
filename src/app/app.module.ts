import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common'
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component'
import { ApiService } from './api/api.service';
import { DescriptionComponent } from './description/description.component';
import { SearchComponent } from './search/search.component';
import { AutocompletePipe } from './pipe.autocomplet/autocomplete.pipe'

// require('jQuery')


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DescriptionComponent,
    SearchComponent,
    AutocompletePipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
