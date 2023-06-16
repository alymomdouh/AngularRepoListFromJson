import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloperListComponent } from './developer-list/developer-list.component';
import { RepoListComponent } from './repo-list/repo-list.component';

const routes: Routes = [
  { path: '', component: RepoListComponent },
  { path: 'repositories', component: RepoListComponent },
  { path: 'developers', component: DeveloperListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
