import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './component/dashboard/dashboard.component'; // Component Dashboard
import { ListarComponent } from './component/listar/listar.component'; // Component Listar
import { AdicionarComponent } from './component/adicionar/adicionar.component'; // Component Adicionar

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'listar-item', component: ListarComponent, data: { state: 'listar-item' }},
	{ path: 'adicionar-item', component: AdicionarComponent, data: { state: 'adicionar-item' }},
	{ path: 'dashboard', component: DashboardComponent, data: { state: 'dashboard' }},
	{ path: 'adicionar-item/:id', component: AdicionarComponent, data: { state: 'adicionar-item' } },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
