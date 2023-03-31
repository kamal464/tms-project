import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-orgform',
  templateUrl: './orgform.component.html',
  styleUrls: ['./orgform.component.css'],
})
export class OrgformComponent {
  empForm: FormGroup;

  constructor(private http: HttpClient, private _fb: FormBuilder) {
    this.empForm = this._fb.group({
      name: new FormControl(''),
      shortname: new FormControl(''),
      country: new FormControl(''),
      // displayname:'',
      phone: new FormControl(''),
      fax: new FormControl(''),
      email: new FormControl(''),
      website: new FormControl(''),
      whatsapp: new FormControl(''),
      linkedin: new FormControl(''),
      comments: new FormControl(''),
    });
  }
  onSubmit(formdata) {
    this.http.post('https://reqres.in/api/users', {}).subscribe((response) => {
      console.log(response);
    });
  }
}
