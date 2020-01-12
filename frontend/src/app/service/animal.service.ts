import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) {

  }
  getAnimals() {
    return this.http.get('/api/animal/list');
  }

  createAnimal(animal) {
    return this.http.post('/api/animal/create', animal);
  }

  updateAnimal(animal) {
    return this.http.put('/api/animal/' + animal.id + '/update', animal);
  }

  getAnimal(id) {
    return this.http.get('/api/animal/' + id + '/get');
  }

  deleteAnimal(animal) {
    return this.http.delete('/api/animal/' + animal.id + '/delete');
  }

}
