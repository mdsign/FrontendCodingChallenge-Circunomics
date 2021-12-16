import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NbDialogService } from '@nebular/theme';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { RepositoryListItemComponent } from '../../components/repository-list-item/repository-list-item.component';
import { RepositoryResponse } from '../../interfaces/gitrepo-interfaces';
import { GitRepositoryService } from '../../services/gitrepo.service';
import { RepositoryListComponent } from './repository-list.component';

describe('RepositoryListComponent', () => {
  let fixture: ComponentFixture<RepositoryListComponent>;
  let component: RepositoryListComponent;
  let gitRepoService: GitRepositoryService;
  let dialogService: NbDialogService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreModule, HttpClientTestingModule],
      declarations: [RepositoryListComponent, RepositoryListItemComponent],
      providers: [GitRepositoryService, NbDialogService],
    }).compileComponents();

    fixture = TestBed.createComponent(RepositoryListComponent);
    component = fixture.componentInstance;
    gitRepoService = TestBed.inject(GitRepositoryService);
    dialogService = TestBed.inject(NbDialogService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  /*describe('::onInit', () => {
    it('should call loadNext function', () => {
      spyOn(component, 'loadNext').and.returnValue();

      component.ngOnInit();
      expect(component.loadNext).toHaveBeenCalled();
    });
  });*/

  describe('::loadNext', () => {
    it('should call getRepositpories from service', () => {
      const mockResponse: RepositoryResponse = {
        total_count: 100,
        incomplete_results: false,
        items: [],
      };
      spyOn(gitRepoService, 'getRepositories').and.returnValue(
        of(mockResponse)
      );

      component.loadNext();

      expect(gitRepoService.getRepositories).toHaveBeenCalled();
    });
  });

  describe('::open', () => {
    it('should open the dialog using dialog service', () => {
      spyOn(dialogService, 'open').and.returnValue({onClose: {subscribe: () => null}}as any);

      component.open({} as any);

      expect(dialogService.open).toHaveBeenCalled();
    });
  });
});
