import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { DevicesComponent } from './devices/devices.component';

const routes: Routes = [
  // redirect home to dashboard
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'myDevices', component: DevicesComponent },
  { path: 'detail/:id', component: DeviceDetailComponent }
  // paths to be added when components are in
  //{ path: 'User', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
