import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {TechComponent} from "./tech/tech.component";
import {ProjectsComponent} from "./projects/projects.component";

export const routes: Routes = [
  {'path': '', component:HomeComponent},
  {'path': 'about', component:AboutComponent},
  {'path': 'projects', component:ProjectsComponent},
  {'path': 'contacts', component:ContactsComponent},
  {'path': 'tech/:id', component:TechComponent},
  {'path': '**', 'pathMatch': 'full', component: PagenotfoundComponent}
];
