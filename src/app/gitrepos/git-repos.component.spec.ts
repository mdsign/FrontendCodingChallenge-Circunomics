import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { CoreModule } from "../core/core.module";
import { GitReposComponent } from "./git-repos.component";
import { RepositoryListComponent } from "./pages/repository-list/repository-list.component";

describe('GitReposComponent', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          CoreModule,
          HttpClientTestingModule,
        ],
        declarations: [
            GitReposComponent,
            RepositoryListComponent
        ],
        providers: [{ provide: 'GitRepositoryService', useValue: {} }]
      }).compileComponents();
    });
  
    it('should create the app', () => {
      const fixture = TestBed.createComponent(GitReposComponent);
      const component = fixture.componentInstance;
      expect(component).toBeTruthy();
    });
  });