import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'prac-button',
  templateUrl: './prac-button.component.html',
  styleUrls: ['./prac-button.component.scss']
})
export class PracButtonComponent implements OnInit {

  @Input() disabled: boolean = false;
  @Input() class: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
