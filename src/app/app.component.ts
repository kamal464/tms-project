import { Component } from '@angular/core';
import { OrgformComponent } from './orgform/orgform.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup,FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'org';
  empForm: FormGroup;
  display = false;
  onPress() {
    this.display = true;
  }

  constructor(private http: HttpClient,
    private _fb: FormBuilder,) {

      this.empForm = this._fb.group({ 
        id:new FormControl('1680097249'),
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

    
///get method
  
  ngOnInit(): void {
    
  //  this.getRecord();
   
  }

  getRecord() {
    
    this.http
      .post('http://192.168.0.55:5000/org/getorg',{})
      .subscribe((data) => {
        this.empForm.patchValue(data);
        console.log(data);
      }); 

}



// delete method
deleteItem(){
  return this.http.delete('http://192.168.0.55:5000/deleteorg')
}
onDelete() {
  this.deleteItem().subscribe((data)=>{
    this.empForm.patchValue(data);
console.log("field is deleted",data)
  })
}




//put method 

update() {
  const formData = this.empForm.value;

  this.http.put('http://192.168.0.55:5000/orgupdate', formData).subscribe((user) => {

    this.empForm.patchValue(user);
    console.log('field is updated')
  });
}
}
