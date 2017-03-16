import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder } from './components/formbuilder/specio.formbuilder'
import { AppComponent }  from './app.component';
import { DndModule } from 'ng2-dnd';

@NgModule({
  imports:      [ BrowserModule, DndModule.forRoot() ],
  declarations: [ AppComponent, FormBuilder ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
