import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnimalListComponent} from './animal-list/animal-list.component';
import {AnimalFormComponent} from './animal-form/animal-form.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {ZookeeperOptionsResolver} from './resolver/zookeeper-options.resolver';
import {ZooOptionsResolver} from './resolver/zoo-options.resolver';
import {AnimalResolver} from './resolver/animal.resolver';
import {ZooFormComponent} from './zoo-form/zoo-form.component';
import {ZooResolver} from './resolver/zoo.resolver';
import {ZooListComponent} from './zoo-list/zoo-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'animal-list', pathMatch: 'full'},
  {path: 'animal-list', component: AnimalListComponent, canActivate: [AuthGuard]},
  { path: 'animal-form', component: AnimalFormComponent, canActivate: [AuthGuard], resolve: {
      zooOptions: ZooOptionsResolver,
      zookeeperOptions: ZookeeperOptionsResolver}},
  {path: 'animal-form/:id', component: AnimalFormComponent, canActivate: [AuthGuard], resolve: {
      zooOptions: ZooOptionsResolver,
      zookeeperOptions: ZookeeperOptionsResolver,
      animal: AnimalResolver}},
  {path: 'zoo-list', component: ZooListComponent, canActivate: [AuthGuard]},
  {path: 'zoo-form', component: ZooFormComponent, canActivate: [AuthGuard]},
  {path: 'zoo-form/:id', component: ZooFormComponent, canActivate: [AuthGuard], resolve: {zoo: ZooResolver}},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
