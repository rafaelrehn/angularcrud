import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './component/dashboard/dashboard.component'; // Component Dashboard
import { ListarComponent } from './component/listar/listar.component'; // Component Listar
import { AdicionarComponent } from './component/adicionar/adicionar.component'; // Component Adicionar

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'listar-item', component: ListarComponent},
	{ path: 'adicionar-item', component: AdicionarComponent},
	{ path: 'dashboard', component: DashboardComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
