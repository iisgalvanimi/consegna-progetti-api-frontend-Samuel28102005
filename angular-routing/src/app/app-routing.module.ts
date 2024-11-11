import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitsComponent } from './fruits/fruits.component';
import { AnimalsComponent } from './animals/animals.component';

const routes: Routes = [
  { path: 'animals', component: AnimalsComponent},
  { path: 'fruits', component: FruitsComponent},
  {path: '', redirectTo: '/animals', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
