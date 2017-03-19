export class Field {
	name:string;
	required:boolean;
	list:string[];
	type:string;
	row:number;
	col:number;
	height:number;
	width:number;
	value:string;

	constructor(type:string) {
		this.name = "";
		this.required = false;
		this.list = [];
		this.type = type;
		this.row = 0;
		this.col = 0;
		this.height = 0;
		this.width = 0;
	}

	copy() {
		var field = new Field(this.type);
		field.name = this.name;
		field.required = this.required;
		for (var i = this.list.length - 1; i >= 0; i--) {
			// Do copy of list here to avoid reference carry-over
			field.list.push(this.list[i]);
		}

		return field;
	}
}

export class SmallInputField extends Field {

	constructor() {
		super("small_input");
	}
}

export class LargeInputField extends Field {
	constructor() {
		super("large_input");
	}
}

export class DropdownField extends Field {
	constructor() {
		super("dropdown");
	}
}

export class TextField extends Field {
	constructor() {
		super("text");
	}
}