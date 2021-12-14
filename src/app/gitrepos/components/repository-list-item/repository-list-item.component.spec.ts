import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RepositoryListItemComponent } from "./repository-list-item.component";

describe('RepositoryListItemComponent', () => {
    let fixture: ComponentFixture<RepositoryListItemComponent>;
    let component: RepositoryListItemComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [],
          declarations: [RepositoryListItemComponent],
          providers: [],
        }).compileComponents();
    
        fixture = TestBed.createComponent(RepositoryListItemComponent);
        component = fixture.componentInstance;

      });
    
      it('should create the app', () => {
        expect(component).toBeTruthy();
      });
});