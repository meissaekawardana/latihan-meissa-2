import { Injectable } from '@angular/core';
import { Teman } from './teman.models';

@Injectable({
  providedIn: 'root'
})
export class TemansService {

  constructor() { }

  convertTeman(temanInfo: Teman): Teman {
    temanInfo.nama = temanInfo.nama.toUpperCase()+' -edited';
    temanInfo.email = temanInfo.email.toUpperCase()+' -edited';
    temanInfo.contact = temanInfo.contact.toUpperCase()+' -edited';
    return temanInfo
  }

}
