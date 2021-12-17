import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { RepoDialogComponent } from '../../components/repo-dialog.component/repo-dialog.component';
import { Repository } from '../../interfaces/gitrepo-interfaces';
import { GitRepositoryService } from '../../services/gitrepo.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss'],
})
export class RepositoryListComponent {
  public repositories: Repository[] = [];
  public pageToLoadNext = 1;

  public constructor(
    private gitRepoService: GitRepositoryService,
    private dialogService: NbDialogService
    ) {}

  public loadNext() {
    this.gitRepoService
      .getRepositories(this.pageToLoadNext)
      .subscribe((response) => {
        this.repositories.push(...response.items);
        this.pageToLoadNext++;
      });
  }

  public openDialog(repository: Repository) {
    const dialogRef = this.dialogService.open(RepoDialogComponent, {
      context: {
        dialogTitle: repository.name,
        dialogData: repository
      } 
    });

    dialogRef.onClose.subscribe(rate => {

      const index = this.repositories?.findIndex(
        (item: any) => item.id === repository.id
      );

      if (this.repositories && index !== undefined) {
        const item = this.repositories[index];
        this.repositories[index] = { ...item, starRating: rate };
      }
    });
          
  }
}
