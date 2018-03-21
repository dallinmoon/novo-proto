import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'start/login',
    pathMatch: 'full',
  },
  {
    path: 'app',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'utility',
        loadChildren: './pages/utility/utility.module#UtilityModule'
      },
      {
        path: 'power',
        loadChildren: './pages/power/power.module#PowerModule'
      },
      {
        path: 'hvac',
        loadChildren: './pages/hvac/hvac.module#HvacModule'
      },
      {
        path: 'gas',
        loadChildren: './pages/gas/gas.module#GasModule'
      },
      {
        path: 'lighting',
        loadChildren: './pages/lighting/lighting.module#LightingModule'
      }
    ]
  },
  {
    path: 'start',
    component: SimpleLayoutComponent,
    data: {
      title: 'start'
    },
    children: [
      {
        path: 'login',
        loadChildren: './pages/login/login.module#LoginModule',
      },
      {
        path: 'signup',
        loadChildren: './pages/signup/signup.module#SignupModule',
      },
      {
        path: 'reset',
        loadChildren: './pages/reset/reset.module#ResetModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
