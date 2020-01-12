import {Component, forwardRef, OnInit, Input, EventEmitter, Output} from '@angular/core';
/*import {Country} from '@angular-material-extensions/select-country';*/
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {COUNTRIES_DB} from '@angular-material-extensions/select-country/lib/db';
import {MatAutocompleteSelectedEvent, MatFormFieldAppearance} from '@angular/material';
import {map, startWith} from 'rxjs/operators';


export interface Country {
  name: string;
  alpha2Code: string;
  alpha3Code: string;
  numericCode: string;
  }



@Component({
  selector: 'app-country-picker',
  templateUrl: './country-picker.component.html',
  styleUrls: ['./country-picker.component.scss'],

})
export class CountryPickerComponent implements OnInit {


  @Input() placeHolder = 'Select country';
  @Input() label: string;
  @Input() appearance: MatFormFieldAppearance;
  @Input() disabled: boolean;
  @Input() readonly: boolean;
  @Input() hint: any;
  @Input() required = true;


  @Output() onCountrySelected: EventEmitter<Country> = new EventEmitter<Country>();


  countryFormControl = new FormControl();
  selectedCountry: Country;
  countries: Country[] = COUNTRIES_DB;
  filteredOptions: Observable<Country[]>;

  ngOnInit() {
    this.filteredOptions = this.countryFormControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): Country[] {
    const filterValue = value.toLowerCase();

    return this.countries.filter((option: Country) =>
      option.name.toLowerCase().includes(filterValue)
      || option.alpha2Code.toLowerCase().includes(filterValue)
      || option.alpha3Code.toLowerCase().includes(filterValue)
    );
  }

  onOptionsSelected($event: MatAutocompleteSelectedEvent) {
    this.selectedCountry = this.countries.find(country => country.name === $event.option.value);
    this.onCountrySelected.emit(this.selectedCountry);
  }

}
