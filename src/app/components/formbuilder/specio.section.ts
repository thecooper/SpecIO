export class Section {
	name:string;
	expanded:boolean;

	constructor(name:string) {
		this.name = name;
	}

	setExpanded(value:boolean) {
		this.expanded = value;
	}

	toggleExpanded() {
		this.expanded = !this.expanded;
	}
}