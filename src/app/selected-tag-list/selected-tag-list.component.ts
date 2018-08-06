import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from 'angular-tag-select';

@Component({
	selector: 'app-selected-tag-list',
	templateUrl: './selected-tag-list.component.html',
	styleUrls: ['./selected-tag-list.component.css'],
})
export class SelectedTagListComponent implements OnInit {
	@Input() selectedTags: Tag[];
	@Output() emitRemoveTag: EventEmitter<Tag> = new EventEmitter<Tag>();

	constructor() {}

	ngOnInit() {}

	removeTag(tag: Tag) {
		this.emitRemoveTag.emit(tag);
	}
}
