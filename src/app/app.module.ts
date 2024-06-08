import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyCardComponent } from './components/my-card/my-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BtnComponent } from './components/btn/btn.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyCardComponent,
    HomePageComponent,
    BtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
