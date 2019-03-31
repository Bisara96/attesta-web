import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-userstory-acceptance-criteria',
  templateUrl: './userstory-acceptance-criteria.component.html',
  styleUrls: ['./userstory-acceptance-criteria.component.scss']
})
export class UserstoryAcceptanceCriteriaComponent implements OnInit {

  @Input() accptCriteria: string;
  acceptanceCriteria: string[];

  constructor() { }

  ngOnInit() {
    this.acceptanceCriteria = JSON.parse(this.accptCriteria);
  }

}
