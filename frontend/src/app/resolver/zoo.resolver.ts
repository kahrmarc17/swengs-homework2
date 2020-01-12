import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {ZooService} from '../service/zoo.service';

@Injectable({
  providedIn: 'root'
})
export class ZooResolver implements Resolve<Observable<any>> {
  constructor(private zooService: ZooService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.zooService.getZoo(route.paramMap.get('id'));
  }
}
