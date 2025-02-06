import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CampaignsComponent } from '../campaigns/campaigns.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
          { path: '', component: DashboardComponent },  // Default route for pie chart
          { path: 'campaigns', component: CampaignsComponent }
        ])
  ]
})
export class DashboardModule { }
