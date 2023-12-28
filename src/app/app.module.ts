import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppUserListComponent } from './app-user-list/app-user-list.component';
import {HttpClientModule} from "@angular/common/http";
import { AppUserRegComponent } from './app-user-reg/app-user-reg.component';
import { NavigationPanelComponent } from './navigation-panel/navigation-panel.component';
import {FormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AppUserListComponent,
    AppUserRegComponent,
    NavigationPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
