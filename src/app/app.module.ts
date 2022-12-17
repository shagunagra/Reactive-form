import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { MatTableModule } from '@angular/material/table';
import { EmployeeDataTableComponent } from './components/employee-data-table/employee-data-table.component';




@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    EmployeeDataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  exports:[MatTableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
