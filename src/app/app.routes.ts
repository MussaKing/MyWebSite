import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";

export const routes: Routes = [
  {'path': '', component:HomeComponent},
  {'path': 'about', component:AboutComponent},
  {'path': 'contacts', component:ContactsComponent},
  {'path': '**', 'pathMatch': 'full', component: PagenotfoundComponent}
];
