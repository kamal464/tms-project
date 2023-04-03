import { Component,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.css']
})
export class OfficesComponent {
  ofform:any=FormGroup;
  org_id:number;
  org_bb_obj: any = [];
  display = false;
  showForm = true;
  fieldsDisabled: boolean = false;
  onPress() {
    this.display = true;
  }


  constructor(private http: HttpClient,
    private _fb: FormBuilder,) {
      
      this.ofform = this._fb.group({ 
        fkorgid:new FormControl('org_id'),
        title:new FormControl(''),
        name:new FormControl(''),
        // type:new FormControl(''),
  
      })
      
      
    } 
    ngOnInit(): void {
      this.officeRecord();
      this.orgdd();
    }

    officeRecord() {
      this.http.post('http://192.168.0.55:5000/office/getoffice',{}).subscribe(office => {
      this.ofform.patchValue(office)
        console.log('officerecord called',office);
      });
    }

addOffice(formdata){
  // this.org_id = this.ofform.get('fkcountrycode').value;
  let jsonform = JSON.stringify(this.ofform.value);
  console.log(jsonform)
  this.http.post('http://192.168.0.55:5000/office/addoffice',jsonform).subscribe(office => {
    console.log(office)
  })
}

updateOffice() {
  const formData = this.ofform.value;
  this.org_id = this.ofform.get('fkorgid').value;
  this.http.put('http://192.168.0.55:5000/office/updateoffice', formData).subscribe((user) => {

    this.ofform.patchValue(user);
    console.log('field is updated')
  });
}


deleteOffice() {
  this.http.delete('http://192.168.0.55:5000/office/deleteoffice').subscribe((data)=>{
    this.ofform.patchValue(data);
console.log("field is deleted",data)
  })
console.log('clicked')
}


orgdd() {
  this.http.post('http://192.168.0.55:5000/dropdown/getorg',{}).subscribe(orgs => {
    this.org_bb_obj = orgs;
    console.log(orgs)
  });
}
}
