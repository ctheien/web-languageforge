import { Component, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'multitext',
  templateUrl: 'multitext.component.html',
  styleUrls: ['multitext.component.css'],
})
export class MultitextComponent implements OnInit {

  // @Input('label') public label: string = "";
  @Input() public languages: string[] = [];
  @Input() public content: string = "";
  @Input() id: string;
  @Input('userName') label: string;

  constructor() {

   }

  ngOnInit() {
    this.getLanguages();
    this.getLabel();
    this.getContent();
  }

  getLanguages() {
    this.languages = ["en","ga","ja"];
  }
  getLabel() {
    // this.label = "Word";
    console.log(this.label);
  }
  getContent() {
    this.content = "bacon";
  }
}