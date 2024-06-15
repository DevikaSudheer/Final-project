import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:'menu',component:MenuComponent},
    {path:'services',component:ServicesComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'contactus',component:ContactsComponent}
];
