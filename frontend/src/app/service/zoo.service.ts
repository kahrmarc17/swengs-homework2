import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ZooService {

  constructor(private http: HttpClient) {
  }

  retrieveZooOptions() {
    return this.http.get <any[]> ('/api/zoo/options');
  }

  getZoos() {
    return this.http.get('/api/zoo/list');
  }

  createZoo(zoo) {
    return this.http.post('/api/zoo/create', zoo);
  }

  updateZoo(zoo) {
    return this.http.put('/api/zoo/' + zoo.id + '/update', zoo);
  }

  getZoo(id) {
    return this.http.get('/api/zoo/' + id + '/get');
  }

  deleteZoo(zoo) {
    return this.http.delete('/api/zoo/' + zoo.id + '/delete');
  }
}
