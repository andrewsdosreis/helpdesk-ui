import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showTemplate = false;
  public shared: SharedService;

  constructor() {
    this.shared = SharedService.getInstance();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.shared.showtemplate.subscribe(
      show => this.showTemplate = show
    );
  }

  showContentWrapper() {
    return {
      'content-wrapper': this.shared.isLoggedIn()
    };
  }
}
