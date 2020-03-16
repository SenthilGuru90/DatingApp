import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { ListComponent } from './list/list.component';
import { MessagesComponent } from './messages/messages.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'member', component: MemberListComponent},
    { path: 'messages', component: MessagesComponent },
    { path: 'list', component: ListComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
] ;
