import { HomeComponent } from '../Home/app.HomeComponent';
import { StudentComponent } from '../Student/app.StudentComponent';

import { StudentSearch } from '../Search/app.SearchComponent';



export const MaintRoutes=[
    {path:'',component:HomeComponent},
    {path:'Home',component:HomeComponent},
    {path:'Student', loadChildren: () => import('../Student/app.StudentModule').then(m => m.StudentModule)},
    {path:'SearchStudent', loadChildren: () => import('../Search/app.SearchModule').then(m => m. SearchModule )},
]