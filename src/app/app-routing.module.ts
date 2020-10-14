import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { MasterMainComponent } from './master-main/master-main.component';


const routes: Routes = [
  {path: 'userMain', component: MainComponent},
  {path: 'masterMain', component: MasterMainComponent},
  {path: '**', pathMatch: 'full', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
