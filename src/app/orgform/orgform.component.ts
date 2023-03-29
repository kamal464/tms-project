import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup,FormControl} from '@angular/forms';
import {serialize} from 'form-serialize';
import { countries } from '../shared/models/country.model';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-orgform',
  templateUrl: './orgform.component.html',
  styleUrls: ['./orgform.component.css'],
})
export class OrgformComponent {
  empForm: FormGroup;

  constructor(private http: HttpClient,
    private _fb: FormBuilder,) {

      this.empForm = this._fb.group({ 
        name:new FormControl(''),
        shortname:new FormControl(''),
        // country:new FormControl(''),
        displayname:new FormControl(''  ),
        phone:new FormControl(''),
        email:new FormControl(''),
        fax:new FormControl(''),
        website:new FormControl(''),
        whatsapp:new FormControl(''),
        linkedin:new FormControl(''),
        comments:new FormControl(''),
      })


    } 

    

  onSubmit(formdata) {
    let jsonform = JSON.stringify(this.empForm.value);
     
    console.log(jsonform)

    this.http
      .post('http://192.168.0.55:5000/org/addorg',jsonform)
      .subscribe((response) => {
        console.log(response);
      });
  // 
  // onSubmit(formdata) {
  //   this.http
  //     .get('http://192.168.0.55:5000/getorg')
  //     .subscribe((response) => {
  //       console.log(response);
  //     });
  }


}
// export class YourComponent implements OnInit {
  
  
  
//   constructor(
//     private https:countries
//   ){}

//   ngOnInit(): void {

//   }
// }