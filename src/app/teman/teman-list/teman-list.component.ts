import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Teman } from '../teman.models';

@Component({
  selector: 'app-teman-list',
  templateUrl: './teman-list.component.html',
  styleUrls: ['./teman-list.component.css']
})
export class TemanListComponent implements OnInit {

@Output() dariChildKeParent: EventEmitter<Teman> = new EventEmitter();

@Input() temanParent: Teman[];

  constructor() { }

  ngOnInit() {
  }

  showname(idx:number) {
    this.dariChildKeParent.emit(this.temanParent[idx]);
    console.log(idx);
  }
}
