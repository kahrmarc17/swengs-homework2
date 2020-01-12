import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  _MatMenuDirectivesModule, MatAutocompleteModule, MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule,
  MatFormFieldModule, MatIconModule, MatInputModule,
  MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatRadioModule,
  MatSelectModule, MatSortModule, MatStepperModule, MatTableModule, MatToolbarModule
} from '@angular/material';
import { DateComponent } from './date/date.component';
import { BarRatingModule } from 'ngx-bar-rating';
import {JwtModule} from '@auth0/angular-jwt';
import { LoginComponent } from './login/login.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { ZooFormComponent } from './zoo-form/zoo-form.component';
import { ZooListComponent } from './zoo-list/zoo-list.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country/';
import { CountryPickerComponent } from './country-picker/country-picker.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}


@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    LoginComponent,
    AnimalListComponent,
    AnimalFormComponent,
    ZooFormComponent,
    ZooListComponent,
    DialogComponent,
    CountryPickerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    BarRatingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:4200']
      }
    }),
    MatRadioModule,
    MatIconModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatStepperModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSelectCountryModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule {
}
