import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from 'angular-tag-select';

@Component({
	selector: 'app-possible-tag-list',
	templateUrl: './possible-tag-list.component.html',
	styleUrls: ['./possible-tag-list.component.css'],
})
export class PossibleTagListComponent implements OnInit {
	@Input() possibleTagList: Tag[];
	@Input() selectedTagList: Tag[];
	@Output() emitSelectedTag: EventEmitter<Tag> = new EventEmitter<Tag>();
	constructor() {}

	ngOnInit() {}

	selectedTag(tag: Tag) {
		this.emitSelectedTag.emit(tag);
	}

	isTagSelected(tag: Tag) {
		return this.selectedTagList.findIndex((t: Tag) => t.value === tag.value) > -1;
	}
}
