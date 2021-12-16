import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NbDialogRef } from "@nebular/theme";
import { RepoDialogComponent } from "./repo-dialog.component";

describe('RepoDialogComponent', () => {
    let fixture: ComponentFixture<RepoDialogComponent>;
    let component: RepoDialogComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [],
          declarations: [RepoDialogComponent],
        }).compileComponents();
    
        fixture = TestBed.createComponent(RepoDialogComponent);
        component = fixture.componentInstance;

      });
    
      it('should create the app', () => {
        expect(component).toBeTruthy();
      });
});