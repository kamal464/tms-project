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
      .post('https://fakestoreapi.com/products', { name: 'kamal' })
      .subscribe((data) => {
        console.log(data);
      });
  }

  onSubmit(formData) {
    this.http
      .post('https://example.com/api', formData)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
