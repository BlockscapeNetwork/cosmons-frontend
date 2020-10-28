import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: MenuBarComponent,
    children: [
      { path: 'home', loadChildren: () => import('./monster-dashboard/monster-dashboard.module').then(m => m.MonsterDashboardModule) },
    ]
  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
