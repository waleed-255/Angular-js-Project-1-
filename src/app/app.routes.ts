import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Test } from './test/test';
import { Gallery } from './gallery/gallery';
import { Contact } from './contact/contact';
import { myGuardsGuard } from './my-guards-guard';
import { Login } from './login/login';

export const routes: Routes = [
    {path:"",component:Home},
    {path:"about",component:About},
    {path:"test",component:Test},
    {path:"Login",component:Login},
    {path:"gallery",component:Gallery,canActivate:[myGuardsGuard]},
    { path: "contact", component: Contact,canActivate:[myGuardsGuard]},
];
