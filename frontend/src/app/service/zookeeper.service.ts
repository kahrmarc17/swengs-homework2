import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZookeeperService {

  constructor(private http: HttpClient) {
  }

  retrieveZookeeperOptions() {
    return this.http.get <any[]> ('/api/zookeeper/options');
  }

}
