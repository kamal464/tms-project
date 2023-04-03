import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { countries } from '../shared/models/country.model';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-orgform',
  templateUrl: './orgform.component.html',
  styleUrls: ['./orgform.component.css'],
})
export class OrgformComponent {
  @Input() data: any;
  empForm: FormGroup;
  country_id: string;

  constructor(private http: HttpClient, private _fb: FormBuilder) {
    this.empForm = this._fb.group({
      name: new FormControl(''),
      shortname: new FormControl(''),
      displayname: new FormControl(''),
      fkcountrycode: new FormControl(this.country_id),
      phone: new FormControl(''),
      email: new FormControl(''),
      fax: new FormControl(''),
      website: new FormControl(''),
      whatsapp: new FormControl(''),
      linkedin: new FormControl(''),
      comments: new FormControl(''),
    });
  }

  onSubmit(formdata) {
    this.country_id = this.empForm.get('fkcountrycode').value;
    let jsonform = JSON.stringify(this.empForm.value);
    console.log(this.country_id);
    console.log(jsonform);

    this.http
      .post('http://192.168.0.55:5000/org/addorg', jsonform)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
// export class YourComponent implements OnInit {

//   constructor(
//     private https:countries
//   ){}

//   ngOnInit(): void {

//   }
// }
