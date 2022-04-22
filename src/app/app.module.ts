import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { MessageComponent } from './message/message.component';
import { ProfileComponent } from './profile/profile.component';
import { SavedpostComponent } from './savedpost/savedpost.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    SuggestionsComponent,
    MessageComponent,
    ProfileComponent,
    SavedpostComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
