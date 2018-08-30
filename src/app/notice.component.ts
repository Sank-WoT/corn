import { Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})

export class NoticeComponent {
	@Input() textMessage: string;
	constructor(){}
}