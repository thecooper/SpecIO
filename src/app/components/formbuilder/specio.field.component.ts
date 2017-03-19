import { Component, Input } from '@angular/core';
import { Field } from './specio.field';

@Component({
	selector:"field",
	templateUrl:'./app/components/formbuilder/specio.field.template.html',
	styleUrls: ['./app/components/formbuilder/specio.field.style.css']
})
export class FieldComponent {
	@Input() field:Field;
}