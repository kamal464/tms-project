import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css'],
})
export class GradesComponent {
  gradeform: any = FormGroup;
  myDate:any;
  org_bb_obj: any = [];
  org_id = [];
  display = false;
  onPress() {
    this.display = true;
  }
  
  constructor(private http: HttpClient, private _fb: FormBuilder) {
    this.gradeform = this._fb.group({
      fkorgid: new FormControl(''),
      code: new FormControl(''),
      name: new FormControl(''),
      // type:new FormControl(''),
    });
    this.myDate = new Date()
  }
  
  gradeRecord() {
    this.http.post('', {}).subscribe((grade) => {
      this.gradeform.patchValue(grade);
      console.log('officerecord called', grade);
    });
  }

  addGrade(formdata) {
    // this.org_id = this.ofform.get('fkcountrycode').value;
    let jsonform = JSON.stringify(this.gradeform.value);
    console.log(jsonform);
    this.http.post('', jsonform).subscribe((grade) => {
      console.log(grade);
    });
  }

  updateGrade() {
    const formData = this.gradeform.value;
    this.org_id = this.gradeform.get('fkorgid').value;
    this.http.put('', formData).subscribe((user) => {
      this.gradeform.patchValue(user);
      console.log('field is updated');
    });
  }

  deleteGrade() {
    this.http.delete('').subscribe((data) => {
      this.gradeform.patchValue(data);
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
