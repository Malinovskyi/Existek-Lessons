import { TestDirective } from './directives/test.directive';
import { TableComponent } from './components/table/table.component';
import { TableBodyComponent } from './components/table-body/table-body.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TableHeaderComponent,
    TableBodyComponent,
    TableComponent,
    TestDirective,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
