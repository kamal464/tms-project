import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEventType,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FileuploadserviceService {
  constructor(private http: HttpClient) {}

  upload(files: Set<File>): {
    [key: string]: {
      progress: Observable<number>;
      response: Observable<HttpResponse<any>>;
    };
  } {
    // create a new FormData instance
    const formData: FormData = new FormData();

    // add each file to the FormData instance
    files.forEach((file) => {
      formData.append('files', file, file.name);
    });

    // create a new HTTP request to upload the files
    const req = new HttpRequest('POST', '/api/upload', formData, {
      reportProgress: true,
    });

    // send the HTTP request and return an object with progress and response observables for each file
    const fileUploadStatus = {};
    this.http.request(req).subscribe((event) => {
      if (event.type === HttpEventType.UploadProgress) {
        const percentDone = Math.round((100 * event.loaded) / event.total);
        fileUploadStatus[event['srcElement'].url]['progress'].next(percentDone);
      } else if (event instanceof HttpResponse) {
        fileUploadStatus[event['url']]['response'].next(event);
      }
    });

    // return the progress and response observables for each file
    files.forEach((file) => {
      fileUploadStatus[file.name] = {
        progress: new Observable<number>(),
        response: new Observable<HttpResponse<any>>(),
      };
      fileUploadStatus[file.name]['progress'].next(0);
      fileUploadStatus[file.name]['response'].next(null);
    });
    return fileUploadStatus;
  }
}
