import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent {
  depform: any = FormGroup;
  offices: any = [];
  organizations: any = [];
  departments: any = [];
  office_dd: any = [
  
  ];
  org_dd: any = [];
  display = false;
  onPress() {
    this.display = true;
  }

  constructor(private http: HttpClient, private _fb: FormBuilder) {
    this.depform = this._fb.group({
      id:new FormControl(''), 
      fkofficeid: new FormControl(''),
      fkorgid: new FormControl(''),
      fkdepartmenttypecode: new FormControl(''),
      name: new FormControl(''),
      headofdepartment: new FormControl(''),

      // type:new FormControl(''),
    });
  }

  ngOnInit(): void {
    // this.departmentRecord();
  }

  departmentRecord() {
    this.http.post('', {}).subscribe((dept) => {
      this.depform.patchValue(dept);
      console.log('departmentrecord called', dept);
    });
  }

  addDepartment(formdata) {
    // this.org_id = this.ofform.get('fkcountrycode').value;
    let jsonform = JSON.stringify(this.depform.value);
    console.log(jsonform);
    this.http.post('http://192.168.0.55:5000/department/adddepartment', jsonform).subscribe((dept) => {
      console.log(dept);
    });
  }

  updateDepartment() {
    const formData = this.depform.value;
    // this.org_id = this.depform.get('fkorgid').value;
    this.http.put('', formData).subscribe((user) => {
      this.depform.patchValue(user);
      console.log('field is updated');
    });
  }

  deleteOffice() {
    this.http.delete('').subscribe((data) => {
      this.depform.patchValue(data);
      console.log('field is deleted', data);
    });
    console.log('clicked');
  }

  officedd() {
    // this.http.post('', {}).subscribe((office) => {
    //   this.office_dd = office;
    //   console.log(office);
    // });
  }

  orgdd() {
    // this.http
    //   .post('http://192.168.0.55:5000/dropdown/getorg', {})
    //   .subscribe((orgs) => {
    //     this.org_dd = orgs;
    //     console.log(orgs);
    //   });
  }
}
