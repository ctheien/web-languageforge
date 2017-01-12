import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'multitext',
  templateUrl: 'multitext.component.html',
  styleUrls: ['multitext.component.css'],
})
export class MultitextComponent implements OnInit {

  label: string = "";
  languages: string[] = [];
  content: string = "";

  constructor() { }

  ngOnInit() {
    this.getLanguages();
    this.getLabel();
    this.getContent();
  }

  getLanguages() {
    this.languages = ["en","ga","ja"];
  }
  getLabel() {
    this.label = "Word";
  }
  getContent() {
    this.content = "bacon";
  }
}