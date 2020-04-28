import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetSystemInfoComponent } from './get-system-info/get-system-info.component';


const routes: Routes = [
  {
    path:"systemInfo",component:GetSystemInfoComponent
    
  },
  
  {
    path: '',
    redirectTo: "/systemInfo",
    pathMatch: 'full'
    //path:" ",component:NpmrcListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
