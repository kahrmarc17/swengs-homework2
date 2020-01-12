import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {FamilyService} from '../service/family.service';
import {AnimalService} from '../service/animal.service';
import {CategoryService} from '../service/category.service';
import {ZooService} from '../service/zoo.service';
import {ZookeeperService} from '../service/zookeeper.service';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss']
})
export class AnimalFormComponent implements OnInit {
  animalFormGroup: FormGroup;
  age;
  zooOptions;
  zookeeperOptions;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private router: Router,
              private animalService: AnimalService, public familyService: FamilyService, public categoryService: CategoryService) {
  }

  ngOnInit() {

    const data = this.route.snapshot.data;
    this.zooOptions = data.zooOptions;
    this.zookeeperOptions = data.zookeeperOptions;

    this.animalFormGroup = this.fb.group({
      id: [null],
      family: [null],
      category: [null],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      origin_land: [''],
      date_of_birth: ['', Validators.required],
      food: ['', [Validators.maxLength(100), this.badFoodValidator(/human/i)]],
      healthy: [true],
      zoo: [[]],
      zookeepers: [[]]
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.animalService.getAnimal(id)
        .subscribe((response) => {
          this.animalFormGroup.patchValue(response);
        });
    }

    this.animalFormGroup.controls.date_of_birth.valueChanges.subscribe(() => {
      const dateofbirth = this.animalFormGroup.controls.date_of_birth.value;
      this.age = undefined;
      if (dateofbirth) {
        this.age = this.calculateAge(new Date(dateofbirth));
      }
    });


    if (data.animal) {
      this.animalFormGroup.patchValue(data.animal);
    }
  }


  badFoodValidator(badWord: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = /human/.test(control.value);
      return forbidden ? {badFood: {value: control.value}} : null;
    };
  }

  createAnimal() {
    const animal = this.animalFormGroup.value;
    if (animal.id) {
      this.animalService.updateAnimal(animal)
        .subscribe(() => {
          alert('updated successfully');
        });
    } else {
      this.animalService.createAnimal(animal)
        .subscribe((response: any) => {
          this.router.navigate(['/animal-form/' + response.id]);
        });
    }
  }

  calculateAge(date) {
    const ageDifMs = Date.now() - date;
    if (ageDifMs > 0) {
      const ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    } else {
      return 0;
    }
  }

}


