import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface Country {
  name: string;
}


@Component({
  selector: 'app-country-picker',
  templateUrl: './country-picker.component.html',
  styleUrls: ['./country-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CountryPickerComponent),
      multi: true
    }
  ]
})
export class CountryPickerComponent implements ControlValueAccessor, OnInit {

  @Input()
  placeholder: string;
  @Input()
  required = false;

  country = new FormControl();
  private propagateChange: any;
  filteredCountries: Observable<Country[]>;

  countries: Country[] = [
    {
      name: 'Austria',
    },
    {
      name: 'Germany'
    },
    {
      name: 'France'
    },
    {
      name: 'Canada'
    },
    {
      name: 'USA'
    },
    {
      name: 'Russia'
    },
    {
      name: 'Italy'
    },
    {
      name: 'Brazil'
    },
    {
      name: 'China'
    },
    {
      name: 'Australia'
    },
    {
      name: 'Egypt'
    },
    {
      name: 'Romania'
    },
    {
      name: 'England'
    }
  ];

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.country = this.fb.control(null);
    this.country.valueChanges.subscribe((newValue) => {
      this.propagateChange(newValue);
    });

    this.filteredCountries = this.country.valueChanges
      .pipe(
        startWith(''),
        map(country => country ? this._filterCountries(country) : this.countries.slice())
      );
  }

  private _filterCountries(value: string): Country[] {
    const filterValue = value.toLowerCase();

    return this.countries.filter(option => option.name.toLowerCase().indexOf(filterValue));
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this.country.patchValue(obj, {emitEvent: false});
  }
}
