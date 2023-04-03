import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OrgformComponent } from './orgform/orgform.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterserviceInterceptor } from './interservice.interceptor';
import { MatSelectModule } from '@angular/material/select';
import { OfficesComponent } from './offices/offices.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmenttypeComponent } from './departmenttype/departmenttype.component';
import { DesignationsComponent } from './designations/designations.component';
import { GradesComponent } from './grades/grades.component';
import { IdentificationsComponent } from './identifications/identifications.component';

@NgModule({
  declarations: [
    AppComponent,
    OrgformComponent,
    OfficesComponent,
    DepartmentComponent,
    DepartmenttypeComponent,
    DesignationsComponent,
    GradesComponent,
    IdentificationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterserviceInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
