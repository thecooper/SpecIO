import { Component } from '@angular/core';
import { Template } from './specio.template';
import { Section } from './specio.section';

@Component({
	selector:'form-builder',
	templateUrl:'./app/components/formbuilder/specio.formbuilder.template.html',
	styleUrls:['./app/components/formbuilder/specio.formbuilder.css']
})
export class FormBuilder {
	documentType: string;
	template: Template;

	constructor() {
		this.documentType = "Template";
		this.template = new Template();
	}

	removeSection(section:Section) {
		this.template.sections = this.template.sections.filter(function(el) { return el != section });
	}

	selectSection(section:Section) {
		for (var i = this.template.sections.length - 1; i >= 0; i--) {
			if(this.template.sections[i] == section) {
				this.template.sections[i].setExpanded(true);
			} else {
				this.template.sections[i].setExpanded(false);
			}
		}
	}

	toggleExpandSections() {
		var expandSections = false;

		if(this.template.sections.some(function(section){ return section.expanded; })) {
			expandSections = false;	
		} else {
			expandSections = true;
		}

		for (var i = this.template.sections.length - 1; i >= 0; i--) {
			this.template.sections[i].setExpanded(expandSections);
		}
	}
}