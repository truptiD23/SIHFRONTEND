import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PredictorComponent } from './perdictor/perdictor.component';
import { DashbordUIComponent } from './dashbord-ui/dashbord-ui.component';
import { DetailsComponent } from './details/details.component';


export const routes: Routes = [
    {path: '', component:DashbordUIComponent},
    {path: 'detail', component: PredictorComponent},
    {path: 'detail/:userid', component: DetailsComponent}
];
