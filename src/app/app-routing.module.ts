import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { ProfileComponent } from './profile/profile.component';
import { SavedpostComponent } from './savedpost/savedpost.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'message',
    component: MessageComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'saved-posts',
    component: SavedpostComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
