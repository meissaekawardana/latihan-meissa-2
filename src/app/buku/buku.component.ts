import { Component, OnInit } from '@angular/core';
import { Buku } from './buku.model';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrls: ['./buku.component.css']
})
export class BukuComponent implements OnInit {

  bukuList: Buku[] = [];


  constructor() {}

  ngOnInit() {
  }
  onBukuAdd(buku: Buku) {
    console.log(buku);
    this.bukuList.push(buku);
  }

}
