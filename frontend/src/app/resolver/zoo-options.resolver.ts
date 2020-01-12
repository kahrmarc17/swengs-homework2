import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {ZooService} from '../service/zoo.service';

@Injectable({
  providedIn: 'root'
})
export class ZooOptionsResolver implements Resolve<Observable<any>> {
  constructor(private zooService: ZooService) {
  }

  resolve() {
    return this.zooService.retrieveZooOptions();
  }
}
