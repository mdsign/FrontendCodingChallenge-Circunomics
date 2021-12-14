import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { RepoDialogComponent } from '../../components/repo-dialog.component/repo-dialog.component';
import { Repository, RepositoryResponse } from '../../interfaces/gitrepo-interfaces';
import { GitRepositoryService } from '../../services/gitrepo.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss'],
})
export class RepositoryListComponent implements OnInit {
  public repositories: Repository[] = [];
  public pageToLoadNext = 1;

  public constructor(private gitRepoService: GitRepositoryService, private dialogService: NbDialogService) {}

  public ngOnInit(): void {
      this.loadNext();
  }

  public loadNext() {
    this.gitRepoService
      .getRepositories(this.pageToLoadNext)
      .subscribe((response) => {
        this.repositories.push(...response.items);
        this.pageToLoadNext++;
      });
  }

  public open(repository: Repository) {
    this.dialogService.open(RepoDialogComponent, {});
  }
}
