import { Component, OnInit } from '@angular/core';
import { Teman } from './teman.models';
 
@Component({
  selector: 'app-teman',
  templateUrl: './teman.component.html',
  styleUrls: ['./teman.component.css']
})
export class TemanComponent implements OnInit {

  temanList: Teman[] = [];
  constructor() { }
  temanEdit: Teman = new Teman();

  ngOnInit() {
  }

  onTemanAdded(temanInfo: Teman) {
    console.log(temanInfo);
    this.temanList.push(temanInfo);
  }

  onTemanEdit(temanInfo: Teman) {
    this.temanEdit = temanInfo;
    console.log(this.temanEdit);
  }

}
