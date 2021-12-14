import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Repository } from '../../interfaces/gitrepo-interfaces';

@Component({
  selector: 'app-repository-list-item',
  templateUrl: './repository-list-item.component.html',
  styleUrls: ['./repository-list-item.component.scss'],
})
export class RepositoryListItemComponent {
  @Input() public repository?: Repository;

  @Output() public itemClick: EventEmitter<Repository> = new EventEmitter();

  public constructor() {}
}
