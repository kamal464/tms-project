import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FileuploadserviceService } from '../fileuploadservice.service';

@Component({
  selector: 'app-identifications',
  templateUrl: './identifications.component.html',
  styleUrls: ['./identifications.component.css'],
})
export class IdentificationsComponent {
  identityform: any = FormGroup;
  identites: any = [];
  org_bb_obj: any = [];
  offices = [];
  issuedby = [];
  display = false;
  files: Set<File>;
  fileUploadStatus: any;
  onPress() {
    this.display = true;
  }

  constructor(
    private http: HttpClient,
    private _fb: FormBuilder,
    private _file: FileuploadserviceService
  ) {
    this.identityform = this._fb.group({
      fkofficeid: new FormControl(''),
      fkorgid: new FormControl(''),
      type: new FormControl(''),
      issuedby: new FormControl(''),
      issuedate: new FormControl(''),
      number: new FormControl(''),
      name: new FormControl(''),
      validfromdate: new FormControl(''),
      validuptodate: new FormControl(''),
      // type:new FormControl(''),
    });
  }

  onFilesSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const files: FileList | null = inputElement.files;
    this.files = new Set();
    for (let i = 0; i < files.length; i++) {
      this.files.add(files[i]);
    }
  }

  onUpload(): void {
    this.fileUploadStatus = this._file.upload(this.files);
  }
}
