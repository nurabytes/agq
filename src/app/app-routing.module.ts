import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FundComponent } from './fund/fund.component';
import { DocumentsComponent } from './documents/documents.component';
import { ApplyComponent } from './apply/apply.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'fund',
    component: FundComponent
  },
  {
    path: 'documents',
    component: DocumentsComponent
  },
  {
    path: 'apply',
    component: ApplyComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
