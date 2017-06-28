import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FundComponent } from './fund/fund.component';
import { DocumentsComponent } from './documents/documents.component';
import { ApplyComponent } from './apply/apply.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FundComponent,
    DocumentsComponent,
    ApplyComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'nurabytes'}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
