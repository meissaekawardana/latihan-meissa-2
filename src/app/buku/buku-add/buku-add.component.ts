import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Buku } from '../buku.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-buku-add',
  templateUrl: './buku-add.component.html',
  styleUrls: ['./buku-add.component.css']
})
export class BukuAddComponent implements OnInit {

  contactForm: FormGroup;


  @Output() bukuAdd = new EventEmitter<Buku>();
  bukuInfo = new Buku();

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      isbn : new FormControl(null,[Validators.required]),
      nama_buku : new FormControl(null,[Validators.required]),
      qty  : new FormControl(null,[])
    });
  }

  kirim(){
    const buku = new Buku(); 
    // pake cons kalau valuenya gk akan berubah, kalau bakal berubah pake let

    buku.isbn=this.contactForm.get('isbn').value;
    buku.nama_buku=this.contactForm.get('nama_buku').value;
    buku.qty=this.contactForm.get('qty').value;
    console.log(buku);
    
    this.bukuAdd.emit(buku);
  }

  cekIsEmpty(control : FormControl): { [s: string]: boolean} {
    if(control.value && control.value.trim().length === 0) {
      return {'blank': true};
    }
    return null;
  }

  addBuku() {
    console.log(this.bukuInfo);
    this.bukuInfo = new Buku();
  }

}
