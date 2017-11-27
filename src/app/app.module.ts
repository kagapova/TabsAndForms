import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TabsComponent} from "./tabs/tabs.component";
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app.routing.module";
import {TabsService} from "./services/tabs.service";
import {HttpService} from "./services/http.service";
import {Http, HttpModule} from "@angular/http";
import {DpDatePickerModule} from 'ng2-date-picker';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent
  ],
  imports: [
    DpDatePickerModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [TabsService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
