import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-new-agent-configuration',
  templateUrl: './new-agent-configuration.component.html',
  styleUrls: ['./new-agent-configuration.component.scss']
})
export class NewAgentConfigurationComponent implements OnInit {

  showSpinner = false;
  name = "";
  agentType = "recorder";
  browser = "chrome";
  platform = "windows";

  constructor(private mainService: MainService, private cookieService: CookieService) { }

  ngOnInit() {
  }

  downloadAgent() {
    if(this.name === undefined || this.name === null || this.name === '') {
        return;
    }
    this.showSpinner = true;
    this.mainService.createAgent(this.name, this.agentType, this.browser, this.platform).subscribe(result => {
      // alert(result);
      this.showSpinner = false;
      this.mainService.downloadAgent(result);
      if(this.agentType === 'recorder') {
        this.cookieService.set('recorder', this.name);
      }
    });
  }

}
