import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, ValidatorFn, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ZooService} from '../service/zoo.service';
import {UserService} from '../service/user.service';



@Component({
  selector: 'app-zoo-form',
  templateUrl: './zoo-form.component.html',
  styleUrls: ['./zoo-form.component.scss']
})
export class ZooFormComponent implements OnInit {
  zooFormGroup;



  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private router: Router,
              private zooService: ZooService) {
  }

  public ngOnInit(): void {
    const data = this.route.snapshot.data;
    this.zooFormGroup = this.fb.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      address: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      postal_code: ['', [Validators.required, this.zipValidator]],
      town: [],
      land: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      telephone_number: ['', [Validators.required, this.phoneValidator]],
      mail: ['', [Validators.required, this.emailValidator]],
    });


    if (data.zoo) {
      this.zooFormGroup.patchValue(data.zoo);
    }
  }


  createZoo() {
    const zoo = this.zooFormGroup.value;
    if (zoo.id) {
      this.zooService.updateZoo(zoo)
        .subscribe(() => {
          alert('updated successfully');
        });
    } else {
      this.zooService.createZoo(zoo)
        .subscribe((response: any) => {
          this.router.navigate(['/zoo-form/' + response.id]);
        });
    }
  }

  zipValidator(zip) {
    const valid = /^\d{4}(?:\d{1})?$/.test(zip.value);
    if (valid) {
      return null;
    }
    return {invalidZip: true};
  }


  phoneValidator(num): any {
    if (num.pristine) {
      return null;
    }
    const PHONE_REGEXP = /^(\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^0)([0-9]{10}$)/.test(num.value);
    if (PHONE_REGEXP) {
      return null;
    }
    return {
      invalidNumber: true
    };
  }


  emailValidator(mail): any {
    if (mail.pristine) {
      return null;
    }
    const MAIL_REGEXP = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(mail.value);
    if (MAIL_REGEXP) {
      return null;
    }
    return {
      invalidMail: true
    };
  }


}



