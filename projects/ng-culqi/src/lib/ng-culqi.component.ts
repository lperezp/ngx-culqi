import { Component, OnInit } from '@angular/core';
import { NgCulqiService } from './ng-culqi.service';

@Component({
  selector: 'lib-ng-culqi',
  template: `
    <p>
      ng-culqi works!
    </p>
  `,
  styles: []
})
export class NgCulqiComponent implements OnInit {

  constructor(public culqiSrv : NgCulqiService) { }

  ngOnInit() {
  }

}
