import { ViewScreenshotComponent } from './../view-screenshot/view-screenshot.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { InitiateRecordComponent } from '../dialogs/initiate-record/initiate-record.component';

@Component({
  selector: 'app-test-step-result-ss-view',
  templateUrl: './test-step-result-ss-view.component.html',
  styleUrls: ['./test-step-result-ss-view.component.scss']
})
export class TestStepResultSsViewComponent implements OnInit {

  renderValue: string;

  @Input() value;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor(private dialog: MatDialog) {

  }

  ngOnInit() {
    this.renderValue = this.value;
  }

  openImageViewer() {
    this.dialog
      .open(ViewScreenshotComponent, {
        width: "1000px",
        height: "562px",
        data: {
          image: this.renderValue
        }
      })
      .afterClosed()
      .subscribe(result => {
        
      });
  }

}
