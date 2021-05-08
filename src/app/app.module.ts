import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { TemplateTodoComponent } from './template-todo/template-todo.component';
import { TemplateTodoFormComponent } from './template-todo-form/template-todo-form.component';
import { TemplateTodoHeaderComponent } from './template-todo-header/template-todo-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    TemplateTodoComponent,
    TemplateTodoFormComponent,
    TemplateTodoHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
