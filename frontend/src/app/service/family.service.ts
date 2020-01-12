import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  familyNames = {
    gk: 'Großkatzen',
    kk: 'Kleinkatzen',
    p:  'Primaten',
    h:  'Hunde',
    k:  'Kamele',
    gb: 'Großbären',
    pf: 'Pferde'
  };


  constructor() {}
}
