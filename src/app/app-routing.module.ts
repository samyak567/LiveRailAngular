import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiveTrainComponent } from './Components/live-train/live-train.component';
import { TrainComponent } from './Components/train/train.component';
import { TrainBwStationComponent } from './Components/train-bw-station/train-bw-station.component';
import { TrainRouteComponent } from './Components/train-route/train-route.component';
import { RescheduledTrainComponent } from './Components/rescheduled-train/rescheduled-train.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [

  {    
    path: '',    
    redirectTo: 'login',    
    pathMatch: 'full',    
  },    
  {    
    path: 'login',    
    component: LoginComponent,    
    data: {    
      title: 'Login Page'    
    }    
  },     
  {    
    path: 'Register',    
    component: RegisterComponent,    
    data: {    
      title: 'Registration'    
    }    
  },
    { path:'liveTrain', component: LiveTrainComponent  },
    { path:'liveStation', component: TrainComponent  },
    { path:'trainsBetweenStations', component: TrainBwStationComponent },
    { path:'trainSchedule', component: TrainRouteComponent  },
    { path:'rescheduledTrains', component: RescheduledTrainComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [LiveTrainComponent, TrainComponent, TrainBwStationComponent, TrainRouteComponent,RescheduledTrainComponent,LoginComponent,RegisterComponent];

