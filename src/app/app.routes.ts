import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {TechComponent} from "./tech/tech.component";

export const routes: Routes = [
  {'path': '', component:HomeComponent},
  {'path': 'about', component:AboutComponent},
  {'path': 'contacts', component:ContactsComponent},
  {'path': 'tech/:id', component:TechComponent},
  {'path': '**', 'pathMatch': 'full', component: PagenotfoundComponent}
];
