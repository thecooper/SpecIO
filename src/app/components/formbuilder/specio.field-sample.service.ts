import { Injectable } from '@angular/core';
import { Field, TextField, SmallInputField, LargeInputField, DropdownField } from './specio.field';

@Injectable()
export class FieldSampleService {
	sampleFields:Field[];

	constructor() {
		this.sampleFields = [];

		var textField = new TextField();
		textField.name = "Text";
		textField.value = "Lorem Ipsum...";
		
		var inputField = new SmallInputField();
		inputField.name = "small_input";
		
		var listField = new DropdownField();
		listField.name = "dropdown";

		this.sampleFields.push(textField);
		this.sampleFields.push(inputField);
		this.sampleFields.push(listField);
	}

	getSamples() {
		return this.sampleFields;
	}
}