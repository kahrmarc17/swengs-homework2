import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {ZookeeperService} from '../service/zookeeper.service';

@Injectable({
  providedIn: 'root'
})
export class ZookeeperOptionsResolver implements Resolve<Observable<any>> {
  constructor(private zookeeperService: ZookeeperService) {
  }

  resolve() {
    return this.zookeeperService.retrieveZookeeperOptions();
  }
}
