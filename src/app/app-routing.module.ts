import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { serverComponent } from './dashboard/dashboard.component';

import { listComponent } from './list/list.component';
import { ListCreate } from './list/list-create-component';

const routes:Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'dashboard',
    component:serverComponent
  },
  { path:'list',
    component: listComponent,
    children:[
      {path:'create',component: ListCreate}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}