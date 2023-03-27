import { Component } from '@angular/core';
import { OrgformComponent } from './orgform/orgform.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'org';

  display = false;
  onPress() {
    this.display = true;
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://fakestoreapi.com/products/1',)
      .subscribe((data) => {
        console.log(data);
      }); 
  }

 
}
