import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthGuard } from '../_guards/AuthGuard.service';

export const RoutesPaths: Routes = [
  {path: 'login', component:AppComponent, data: { depth:1 , headerPage:'' },},
  {path: 'profile', component:AppComponent, data: { depth:1, headerPage:'Профіль' }, canActivate:[AuthGuard]},
  {path: 'profile/:id', component:AppComponent, data: { depth:1, headerPage:'Профіль користувача' }, canActivate:[AuthGuard]},
  {path: 'friends', component:AppComponent, data: { depth:2, headerPage:'Друзі' }, canActivate:[AuthGuard]},
  {path: 'dreams',  component:AppComponent, data: { depth:3, headerPage:'Мрії' }, canActivate:[AuthGuard]},
  {path: 'dreams/:id', component:AppComponent, data: { depth:3, headerPage:'Мрії користувача' }, canActivate:[AuthGuard]},
  {path: 'suggestions/:id',data: { depth:2 }, component:AppComponent},
  {path: 'godlike',data: { depth:2 }, component:AppComponent},
  {path: 'links',data: { depth:2 }, component:AppComponent},
  {path: 'links/:id',data: { depth:2 }, component:AppComponent},
  {path: 'users', component:AppComponent, data: { depth:4, headerPage:'Користувачі' }, canActivate:[AuthGuard]},
  {path: 'news', component:AppComponent, data: { depth:5, headerPage:'Новини' }, canActivate:[AuthGuard]},
  {path:'', component:AppComponent, data: { depth:3, headerPage:'Dreamster' }, canActivate:[AuthGuard]},
  {path:'**', component:AppComponent, data: { depth:3, headerPage:'Сторінку не знайдено' }, canActivate:[AuthGuard]}
];

