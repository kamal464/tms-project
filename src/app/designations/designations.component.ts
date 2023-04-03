import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-designations',
  templateUrl: './designations.component.html',
  styleUrls: ['./designations.component.css'],
})
export class DesignationsComponent {
  designform: any = FormGroup;
  org_id: number;
  org_bb_obj: any = [];
  display = false;
  onPress() {
    this.display = true;
  }

  constructor(private http: HttpClient, private _fb: FormBuilder) {
    this.designform = this._fb.group({
      fkorgid: new FormControl('org_id'),
      code: new FormControl(''),
      name: new FormControl(''),
      // type:new FormControl(''),
    });
  }
  ngOnInit(): void {}

  designRecord() {
    this.http.post('', {}).subscribe((design) => {
      this.designform.patchValue(design);
      console.log('designrecord called', design);
    });
  }

  addDesign(formdata) {
    // this.org_id = this.ofform.get('fkcountrycode').value;
    let jsonform = JSON.stringify(this.designform.value);
    console.log(jsonform);
    this.http.post('', jsonform).subscribe((design) => {
      console.log(design);
    });
  }

  updateDesign() {
    const formData = this.designform.value;
    this.org_id = this.designform.get('fkorgid').value;
    this.http.put('', formData).subscribe((user) => {
      this.designform.patchValue(user);
      console.log('field is updated');
    });
  }

  deleteDesign() {
    this.http.delete('').subscribe((data) => {
      this.designform.patchValue(data);
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
