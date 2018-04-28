import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    SkillsComponent,
    WorkExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    NavbarComponent,
<<<<<<< HEAD
    FooterComponent,
    ContactComponent
=======
    LandingPageComponent,
    FooterComponent
>>>>>>> 147e41df4aa1664a3ff46d9fea168fcc5f901cb9
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
