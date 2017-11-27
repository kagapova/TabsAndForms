import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {TabsComponent} from "./tabs/tabs.component";


const routes: Routes = [


  {path: '**', component: TabsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
