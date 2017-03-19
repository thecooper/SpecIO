import { NgModule } from '@angular/core';
import { FormbuilderComponent } from './specio.formbuilder.component';
import { FieldComponent } from './specio.field.component';
import { DndModule } from 'ng2-dnd';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
	imports:[ DndModule.forRoot(), BrowserModule ],
	declarations:[ FormbuilderComponent, FieldComponent ],
	exports: [ FormbuilderComponent ]
})
export class FormbuilderModule { }