import { Component, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, Output, Optional,} from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  templateUrl: './repo-dialog.component.html',
  styleUrls: ['./repo-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepoDialogComponent {
  public dialogTitle: string = '';
  public dialogData: any = {};
  groupValue: number = 0;
  buttonPressedState: number[] = [];
  ratingStarValues: number[] = [1, 2, 3, 4, 5];

  public constructor(
    @Optional() private dialogRef: NbDialogRef<RepoDialogComponent>,
    private cd: ChangeDetectorRef
  ) {}

  updateGroupValue(value: any): void {
    this.groupValue = value;
    this.cd.markForCheck();
  }

  onRateSubmit(selectedRate: any) {
    this.dialogRef.close(selectedRate);
  }

  cancel() {
    this.dialogRef.close();
  }
}
