import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { IndustriesComponent } from './industries/industries.component';
import { InsightsComponent } from './insights/insights.component';
import { ListOfRegisteredUsersComponent } from './list-of-registered-users/list-of-registered-users.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Login } from './_guards/login.service';
import { UnsavedChangesGuard } from './_guards/un-saved-changes-guard.service';

import { TnOneComponent } from './tasks/tn-one/tn-one.component';
import { TnTwoListComponent } from './tasks/tn-two/tn-two-list/tn-two-list.component';
import { TnTwoComponent } from './tasks/tn-two/tn-two/tn-two.component';
import { TnThreeComponent } from './tasks/tn-three/tn-three.component';
import { TnFourFirstComponent } from './tasks/tn-four/tn-four-first/tn-four-first.component';
import { TnFourSecondComponent } from './tasks/tn-four/tn-four-second/tn-four-second.component';
import { TestMaterialComponent } from './test-material/test-material.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'insights', component: InsightsComponent },
  { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) },
  { path: 'careers', component: CareersComponent },
  { path: 'industries', component: IndustriesComponent, canActivate: [Login] },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent, canDeactivate: [UnsavedChangesGuard] },
  { path: 'signup', component: ListOfRegisteredUsersComponent },

  { path: 'TnOne', component: TnOneComponent},
  { path: 'TnTwo', component: TnTwoComponent},
  { path: 'TnTwoList', component: TnTwoListComponent},
  { path: 'TnThree', component: TnThreeComponent},
  { path: 'TnFourFirst', component: TnFourFirstComponent},
  { path: 'TnFourSecond', component: TnFourSecondComponent},
  
  { path: 'TestMaterial', component: TestMaterialComponent},

  { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule) },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
