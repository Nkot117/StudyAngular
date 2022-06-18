import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; '@angular/router'
import { MembersComponent } from './members/members.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberDetailsComponent } from './member-details/member-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {
    path: 'members',
    component: MembersComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'details/:id',
    component: MemberDetailsComponent
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
