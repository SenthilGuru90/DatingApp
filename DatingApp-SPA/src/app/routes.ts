import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListComponent } from './list/list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '',
        canActivate: [AuthGuard],
        runGuardsAndResolvers: 'always',
        children: [
            { path: 'member', component: MemberListComponent, canActivate: [AuthGuard]},
            { path: 'messages', component: MessagesComponent },
            { path: 'list', component: ListComponent}
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
] ;
