import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactMeComponent } from './Pages/contact-me/contact-me.component';
import { NewcarComponent } from './components/newcar/newcar.component';
import { LandingComponent } from './components/landing/landing.component';
import { ChildNavComponent } from './Pages/child-nav/child-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactMeComponent,
    NewcarComponent,
    LandingComponent,
    ChildNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
