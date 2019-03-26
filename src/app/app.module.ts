import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { serverComponent } from './dashboard/dashboard.component';
import { listComponent } from './list/list.component';
import { ListCreate } from './list/list-create-component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, BrowserAnimationsModule, TableModule, ButtonModule, CardModule, ReactiveFormsModule, RadioButtonModule, CalendarModule, SidebarModule, PanelMenuModule,
    InputTextModule,ToastModule],
  declarations: [AppComponent, listComponent, serverComponent, ListCreate],
  bootstrap: [AppComponent]
})
export class AppModule { }
