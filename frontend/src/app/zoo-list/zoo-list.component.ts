import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../service/user.service';
import {ZooService} from '../service/zoo.service';

@Component({
  selector: 'app-zoo-list',
  templateUrl: './zoo-list.component.html',
  styleUrls: ['./zoo-list.component.scss']
})
export class ZooListComponent implements OnInit {

  zoos: any[];
  displayedColumns = ['name', 'address', 'town', 'postal_code', 'land', 'telephone_number', 'mail', 'id'];

  constructor(private http: HttpClient, private zooService: ZooService) { }

  ngOnInit() {
    this.zooService.getZoos()
      .subscribe((response: any[]) => {
        this.zoos = response;
         });
  }

  deleteZoo(zoo: any) {
    this.zooService.deleteZoo(zoo)
      .subscribe(() => {
        this.ngOnInit();
      });
  }

}
