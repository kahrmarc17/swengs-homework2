import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AnimalService} from '../service/animal.service';
import {FamilyService} from '../service/family.service';
import {CategoryService} from '../service/category.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {DialogComponent} from '../dialog/dialog.component';
import {ZookeeperOptionsResolver} from '../resolver/zookeeper-options.resolver';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {

  animals: any[];
  displayedColumns = ['name', 'category', 'family', 'healthy', 'date_of_birth', 'origin_land', 'food', 'zoo', 'id'];

  constructor(private http: HttpClient, private animalService: AnimalService,
              public categoryService: CategoryService,
              public familyService: FamilyService, public matDialog: MatDialog) {
  }

  ngOnInit() {
    this.animalService.getAnimals()
      .subscribe((response: any[]) => {
        this.animals = response;
      });
  }

  deleteAnimal(animal: any) {
    this.animalService.deleteAnimal(animal)
      .subscribe(() => {
        this.ngOnInit();
      });
  }

}





