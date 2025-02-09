import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard'; // We'll create this next
import { CampaignsComponent } from './campaigns/campaigns.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    //{ path: 'dashboard', component: DashboardComponent },
    //{ path: 'campaigns', component: CampaignsComponent },
    //{ path: 'campaigns', component: CampaignsComponent }
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
        children: [
          {
            path: '',
            loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
          },
          {
            path: 'campaigns',
            loadComponent: () => import('./campaigns/campaigns.component').then(m => m.CampaignsComponent),
          },
          {
            path: 'template',
            loadComponent: () => import('./notificationtemplate/notificationtemplate.component').then(m => m.NotificationtemplateComponent),
          },
          {
            path: 'pastdueescalation',
            loadComponent: () => import('./pastdueescalation/pastdueescalation.component').then(m => m.PastdueescalationComponent),
          },
          {
            path: 'users',
            loadComponent: () => import('./users/users.component').then(m => m.UsersComponent),
          },
          {
            path: 'maintenance',
            loadComponent: () => import('./maintenance/maintenance.component').then(m => m.MaintenanceComponent),
          }
        ]
      }
    
   
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }
