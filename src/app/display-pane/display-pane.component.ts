import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'display-pane',
  templateUrl: '../src/app/display-pane/display-pane.component.html',
  styleUrls: ['../src/app/display-pane/display-pane.component.css']
})
export class DisplayPaneComponent implements OnInit {
   @Input() componentName: string;
  constructor() { }

  ngOnInit() {
  }

}
