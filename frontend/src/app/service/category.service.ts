import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryNames = {
    l:  'Löwe',
    p:  'Puma',
    a:  'Affe',
    w:  'Wolf',
    tt: 'Trampeltier',
    e:  'Esel',
    le: 'Leopard',
    lu: 'Luchs',
    b:  'Braunbär'
  };


  constructor() {}
}
