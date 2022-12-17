import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeDataService } from 'src/app/services/employee-data.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  employeeForm!: FormGroup;
  roles: string[] = ['admin', 'manager', 'HR', 'developer'];
  getNewEmployeeData: any[] = [];

  constructor(private fb: FormBuilder, private empData: EmployeeDataService, private router: Router) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      address: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25), Validators.pattern('^[a-zA-Z ]*$')]],
      dob: ['', Validators.required],
      role: ['', Validators.required],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      gender: ['', Validators.required]
    })
  }

  changeRole(event: any) {
    this.role?.setValue(event.target.value, {
      onlySelf: true,
    });
  }

  get role() {
    return this.employeeForm.get('role');
  }

  markAsTouched(group: FormGroup | FormArray) {
    group.markAsTouched({ onlySelf: true });

    Object.keys(group.controls).map((field) => {
      const control = group.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.markAsTouched(control);
      }
    });
  }

  onSubmit(){
    // localStorage.setItem('employeeAdded', this.employeeForm.value);
    this.getNewEmployeeData.push(this.employeeForm.value);
    this.empData.getEmployeeData = this.getNewEmployeeData;
    if (this.employeeForm.valid) {
      alert('form submitted!');
    } else {
      this.markAsTouched(this.employeeForm);
    }
  }
}
