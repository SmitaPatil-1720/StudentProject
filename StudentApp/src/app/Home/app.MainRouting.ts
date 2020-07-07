import { HomeComponent } from '../Home/app.HomeComponent';
import { StudentComponent } from '../Student/app.StudentComponent';

import { StudentSearch } from '../Search/app.SearchComponent';
import { LoginComponent } from './app.LoginComponent';
import { SecurityLogic } from '../Utilities/Utilities.AuthGuard';



export const MaintRoutes=[
    {path:'',component:HomeComponent,canActivate:[SecurityLogic]},
    {path:'Home',component:HomeComponent,canActivate:[SecurityLogic]},
    {path:'Login',component:LoginComponent},
    {path:'Student', loadChildren: () => import('../Student/app.StudentModule')
    .then(m => m.StudentModule),canActivate:[SecurityLogic]},
    {path:'SearchStudent', loadChildren: () => import('../Search/app.SearchModule').
    then(m => m. SearchModule ),canActivate:[SecurityLogic]},
]