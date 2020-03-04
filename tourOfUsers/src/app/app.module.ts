import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { UserGridComponent } from './user-grid/user-grid.component';
import { UserComponent } from './user/user.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ReactiveFormsModule} from '@angular/forms';
import { UserInfoGridComponent } from './user-info-grid/user-info-grid.component'
import { RouterModule } from '@angular/router'



@NgModule({
  declarations: [
    AppComponent,
    UserGridComponent,
    UserComponent,
    AddUserFormComponent,
    UserInfoGridComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    GridModule,
    DropDownsModule,
    BrowserAnimationsModule,
    ButtonsModule,
    InputsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: UserComponent },
      { path: 'info', component: UserInfoGridComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
