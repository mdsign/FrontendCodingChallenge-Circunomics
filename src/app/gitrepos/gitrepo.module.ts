import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbIconModule } from '@nebular/theme';
import { CoreModule } from '../core/core.module';
import { RepositoryListItemComponent } from './components/repository-list-item/repository-list-item.component';
import { GitReposComponent } from './git-repos.component';
import { GitReposRoutingModule } from './gitrepos-routing.module';
import { RepositoryListComponent } from './pages/repository-list/repository-list.component';

@NgModule({
  imports: [CommonModule, CoreModule, GitReposRoutingModule, NbIconModule],
  declarations: [GitReposComponent, RepositoryListComponent, RepositoryListItemComponent],
  bootstrap: [GitReposComponent]
})
export class GitRepoModule {}
