import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TamLoginComponent } from './tam-login/tam-login.component';

const routes: Routes = [{ path: '', component: TamLoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TamLoginRoutingModule { }
