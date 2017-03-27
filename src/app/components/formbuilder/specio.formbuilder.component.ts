import { Component } from '@angular/core';
import { Template } from './specio.template';
import { Section } from './specio.section';
import { Field } from './specio.field';
import { FieldSampleService } from './specio.field-sample.service';
import { IGridsterOptions } from 'angular2gridster';

@Component({
	selector:'form-builder',
	templateUrl:'./app/components/formbuilder/specio.formbuilder.template.html',
	styleUrls:['./app/components/formbuilder/specio.formbuilder.css'],
	providers:[ FieldSampleService ]
})
export class FormbuilderComponent {
	documentType: string;
	template: Template;
	sampleFields:Field[];
	dragStartEvent:any;
	gridsterOptions:IGridsterOptions = {
		lanes:4
	};


	constructor(private sampleFieldService:FieldSampleService) {
		this.documentType = "Template";
		this.template = new Template();
		// Fill sampleFields from service
		this.sampleFields = sampleFieldService.getSamples();
	}

	removeSection(section:Section) {
		this.template.sections = this.template.sections.filter(function(el) { 
			return el != section;
		});
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

	toggleSection(section:Section) {
		section.expanded = !section.expanded;
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

	fieldDroppedOnSection(section:Section, $event:any) {
		if(this.dragStartEvent.mouseEvent.target.classList.length && this.dragStartEvent.mouseEvent.target.classList.length > 1) {
			if(this.dragStartEvent.mouseEvent.target.classList.value.split(" ").some(function(el:string) { return el == "draggable-element"; })){
				if($event && $event.dragData && $event.dragData.copy) {
					var newField = $event.dragData.copy();
					newField.name = "Field" + Math.random();
					section.fields.push(newField);
					console.log(section.fields);
				} else {
					console.error("No field data was available to copy to the selected section");
				}
			}
		}
	}

	debounceLeave(section:Section) {
		setTimeout(function() {
			section.expanded = false;
		}, 500);
	}

	debounceEnter(section:Section) {
		console.log("In debounceEnter");
		setTimeout(function() {
			section.expanded = true;
		}, 500);
	}
}