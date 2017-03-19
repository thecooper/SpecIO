import {Field} from './specio.field';

export class Section {
	name:string;
	expanded:boolean;
	fields:Field[];

	constructor(name:string) {
		this.name = name;
		this.fields = [];
	}

	setExpanded(value:boolean) {
		this.expanded = value;
	}

	toggleExpanded() {
		this.expanded = !this.expanded;
	}

	addField(field:Field) {
		this.fields.push(field.copy());
	}
}