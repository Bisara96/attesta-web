import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-testcase-execution-status-indicator',
  templateUrl: './testcase-execution-status-indicator.component.html',
  styleUrls: ['./testcase-execution-status-indicator.component.scss']
})
export class TestcaseExecutionStatusIndicatorComponent implements OnInit {

  renderValue: string;

  @Input() value;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor(private dialog: MatDialog) {

  }

  ngOnInit() {
    this.renderValue = this.value;
  }

}
