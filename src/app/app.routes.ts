import { Routes } from '@angular/router';
import { SeguridadComponent } from './seguridad';
import { RefrigeracionComponent } from './refrigeracion';
import { HardwareSoftwareComponent } from './hardware-software';
import { DesignComponent } from './design';
import { CostosComponent } from './costos';
import { HomeComponent } from './home';
import { EnergyComponent } from './energy/energy.component';

export const routes: Routes = [
  { path: 'seguridad',
    loadChildren: () => import('./seguridad/seguridad.module').then(m => m.SeguridadModule),
    component: SeguridadComponent },
  { path: 'refrigeracion',
    loadChildren: () => import('./refrigeracion/refrigeracion.module').then(m => m.RefrigeracionModule),
    component: RefrigeracionComponent },
  { path: 'hardware',
    loadChildren: () => import('./hardware-software/hardware-software.module').then(m => m.HardwareSoftwareModule),
    component: HardwareSoftwareComponent },
  { path: 'design',
    loadChildren: () => import('./design/desing.module').then(m => m.DesingModule),
    component: DesignComponent },
  { path: 'costos',
    loadChildren: () => import('./costos/costos.module').then(m => m.CostosModule),
    component: CostosComponent },
  { path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    component: HomeComponent},
  { path: 'energy',
    loadChildren: () => import('./energy/energy.module').then(m => m.EnergyModule),
    component: EnergyComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }

];
