import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() columns! : string[]
  @Output() columnEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setColumnStatus(event:any){
    this.columnEvent.emit(event.target.value);
  }



}
