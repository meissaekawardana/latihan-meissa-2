import { Component, OnInit, ViewChild, ElementRef, Output, Input } from '@angular/core';
import { Teman } from '../teman.models';
import { EventEmitter } from '@angular/core';
import { TemansService } from '../temans.service';

@Component({
  selector: 'app-teman-add',
  templateUrl: './teman-add.component.html',
  styleUrls: ['./teman-add.component.css'],
  providers: [TemansService]
})
export class TemanAddComponent implements OnInit {

  @ViewChild('inputContact') inputContact: ElementRef;
  
  @Output() temanAdded = new EventEmitter<Teman>();

  @Input() temanChild: Teman;

  @Input() temanEditParent: Teman;

  inputInfo = new Teman ();
  constructor(private temanService: TemansService) { }

  ngOnInit() {
  }
  tambahTeman(inputEmail : HTMLInputElement) {
    console.log(this.inputInfo);
    console.log(inputEmail.value);
    console.log(this.inputContact.nativeElement.value);
    this.temanAdded.emit(this.temanService.convertTeman(this.inputInfo));
    this.inputInfo = new Teman();
  }
}
