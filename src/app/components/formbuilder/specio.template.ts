import { Section } from './specio.section';

export class Template {
	name: string;
	description: string;
	revision: number;
	sections:Section[];

	constructor() {
		this.name = "Empty Template";
		this.description = "This here is an empty template!";
		this.revision = 0;
		this.sections = [];
		var newSection = new Section("Section A");
		this.sections.push(newSection);
	}

	add_section() {
		this.sections.push(new Section("New Section"));
	}
}