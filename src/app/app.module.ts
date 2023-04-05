import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SportActivityListComponent } from './sport-activity-list/sport-activity-list.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import { CoreNavigatorComponent } from './core-navigator/core-navigator.component';
import { CoreMainComponent } from './core-main/core-main.component';
import { CoreFooterComponent } from './core-footer/core-footer.component';
import { BottomNavigatorComponent } from './bottom-navigator/bottom-navigator.component';
import {CdkAccordionModule} from "@angular/cdk/accordion";
import { AddActivityComponent } from './add-activity/add-activity.component';
import {RouterLink} from "@angular/router";
import {AppRoutingModule} from "./app-routing-module";
import {MatRadioModule} from "@angular/material/radio";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatListModule} from "@angular/material/list";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { ContentContainerComponent } from './content-container/content-container.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import { UpdateActivityComponent } from './update-activity/update-activity.component';


@NgModule({
  declarations: [
    AppComponent,
    SportActivityListComponent,
    CoreNavigatorComponent,
    CoreMainComponent,
    CoreFooterComponent,
    BottomNavigatorComponent,
    AddActivityComponent,
    ContentContainerComponent,
    UpdateActivityComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    CdkAccordionModule,
    RouterLink,
    MatRadioModule,
    MatDatepickerModule,
    MatListModule,
    MatButtonToggleModule,
    MatInputModule,
    FormsModule,
    MatTooltipModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
