import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() name: string = '';
  @Input() phoneNo: number = 0;
  @Input() profilePic: string = '';
  @Output() onBtnClick = new EventEmitter();

  actionEvent(event: any, actionName?: any) {
    event['event'] = actionName;
     event ['data'] = this.phoneNo;
    
    this.onBtnClick.emit(event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
