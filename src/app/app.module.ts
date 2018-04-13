import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { UserWindowComponent } from './user-window/user-window.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserGroupComponent,
    MenuBarComponent,
    UserWindowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
