import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InsightsComponent } from './insights/insights.component';
import { IndustriesComponent } from './industries/industries.component';
import { CareersComponent } from './careers/careers.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesListComponent } from './services-list/services-list.component';

// lazy laoded Service module
import { ServicesModule } from './services/services.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

//Loading UnsavedChangesGuard
import { UnsavedChangesGuard } from './_guards/un-saved-changes-guard.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ListOfRegisteredUsersComponent } from './list-of-registered-users/list-of-registered-users.component';
import { UserDataDisplayComponent } from './user-data-display/user-data-display.component';
import { HighlightDirective } from './_directives/highlight.directive';
import { CustomLoopDirective } from './_directives/custom-loop.directive';
import { RotateAnimationDirective } from './_directives/rotate-animation.directive';
import { TnOneComponent } from './tasks/tn-one/tn-one.component';
import { TnTwoComponent } from './tasks/tn-two/tn-two/tn-two.component';
import { TnTwoListComponent } from './tasks/tn-two/tn-two-list/tn-two-list.component';
import { TnThreeComponent } from './tasks/tn-three/tn-three.component';
import { TnFourFirstComponent } from './tasks/tn-four/tn-four-first/tn-four-first.component';
import { TnFourSecondComponent } from './tasks/tn-four/tn-four-second/tn-four-second.component';
import { LoopDirective } from './tasks/tn-three/directive/loop.directive';
import { EmailValidatorDirective } from './tasks/tn-two/directive/email-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HomeComponent,
    AboutComponent,
    InsightsComponent,
    IndustriesComponent,
    CareersComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ServicesListComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignUpComponent,
    ListOfRegisteredUsersComponent,
    UserDataDisplayComponent,
    HighlightDirective,
    CustomLoopDirective,
    RotateAnimationDirective,
    TnOneComponent,
    TnTwoComponent,
    TnTwoListComponent,
    TnThreeComponent,
    TnFourFirstComponent,
    TnFourSecondComponent,
    LoopDirective,
    EmailValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
