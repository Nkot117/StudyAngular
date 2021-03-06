import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service'

import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberSearchComponent } from './member-search/member-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MemberDetailsComponent,
    MessagesComponent,
    DashboardComponent,
    MemberSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{ dataEncapsulation: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
