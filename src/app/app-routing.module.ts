import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
//   {
//     path: '',
//     component: QuestionsComponent
//   },
//   {
//     path: 'right',
//     component: RightComponent
//   },
//   {
//     path: 'wrong',
//     component: WrongComponent
//   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
