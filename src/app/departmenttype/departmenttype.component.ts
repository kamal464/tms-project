import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-departmenttype',
  templateUrl: './departmenttype.component.html',
  styleUrls: ['./departmenttype.component.css'],
})
export class DepartmenttypeComponent {
  typeform: any = FormGroup;
  org_bb_obj: any = [];
  org_id = [];
  display = false;
  onPress() {
    this.display = true;
  }

  constructor(private http: HttpClient, private _fb: FormBuilder) {
    this.typeform = this._fb.group({
      fkorgid: new FormControl(''),
      code: new FormControl(''),
      name: new FormControl(''),
      // type:new FormControl(''),
    });
  }

  departtypeRecord() {
    this.http.post('', {}).subscribe((depart) => {
      this.typeform.patchValue(depart);
      console.log('officerecord called', depart);
    });
  }

  addDeparttype(formdata) {
    // this.org_id = this.ofform.get('fkcountrycode').value;
    let jsonform = JSON.stringify(this.typeform.value);
    console.log(jsonform);
    this.http.post('', jsonform).subscribe((depart) => {
      console.log(depart);
    });
  }

  updateDeparttype() {
    const formData = this.typeform.value;
    this.org_id = this.typeform.get('fkorgid').value;
    this.http.put('', formData).subscribe((user) => {
      this.typeform.patchValue(user);
      console.log('field is updated');
    });
  }

  deleteDeparttype() {
    this.http.delete('').subscribe((data) => {
      this.typeform.patchValue(data);
      console.log('field is deleted', data);
    });
    console.log('clicked');
  }

  orgdd() {
    this.http.post('', {}).subscribe((orgs) => {
      this.org_bb_obj = orgs;
      console.log(orgs);
    });
  }
}
