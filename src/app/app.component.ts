import { Component ,} from '@angular/core';
import { OrgformComponent } from './orgform/orgform.component';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup,FormControl,Validators} from '@angular/forms';
import { CountryService } from './countryservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title;
  errorMsg;
  isProcessing = false;
  companyInfo: any = [];
  _currentAction = 'view';
  mydate;
  currentField: string;

  showContent(field: string): void {
    this.currentField = field;
  }
  country_id:string;
  country_bb_obj: any = [];

  empForm: FormGroup;
  display = false;
  onPress() {
    this.display = true;
  }

  constructor(private http: HttpClient,
    private _fb: FormBuilder,
    private countryService: CountryService,
   ) {
      this.mydate = new Date();
      this.empForm = this._fb.group({ 
        id:new FormControl('1680093284'),
        name:new FormControl(''),
        shortname:new FormControl(''),
        fkcountrycode:new FormControl(this.country_id),
        displayname:new FormControl(''),
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
    
   this.getRecord();
   this.Countrydd();
   
  }

 

  
  getRecord(){
    this.http.post('http://192.168.0.55:5000/org/getorg',{}).subscribe((data =>{
      this.empForm.patchValue(data)
      this.companyInfo = data;
      console.log(data)
    }))
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
  this.country_id = this.empForm.get('fkcountrycode').value;

  this.http.put('http://192.168.0.55:5000/org/updateorg', formData).subscribe((user) => {

    this.empForm.patchValue(user);
    console.log('field is updated')

  });
}


Countrydd() {
 
  this.countryService.getCountries().subscribe(countries => {
    this.country_bb_obj = countries;
    console.log(countries)
  });
}

doAction(action): void {
  this.errorMsg = '';
  switch (action) {
    case 'edit':
      
      this._currentAction = action;
      break;
    case 'save':
      this.update();
      this._currentAction = 'view';
      break;
    default:
      this._currentAction = 'view';
  }
}



}