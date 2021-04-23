import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { SearchResultsComponent } from './search-results/search-results.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatProgressBarModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
