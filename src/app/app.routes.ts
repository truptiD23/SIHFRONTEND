import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PredictorComponent } from './perdictor/perdictor.component';


export const routes: Routes = [
    {path: '', component:AppComponent},
    {path: '/detail', component: PredictorComponent}
];
