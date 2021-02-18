import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-viewcompaniesmessages',
  templateUrl: './viewcompaniesmessages.component.html',
  styleUrls: ['./viewcompaniesmessages.component.css'],
})
export class ViewcompaniesmessagesComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() {
    this.accordion = new MatAccordion();
  }

  ngOnInit(): void {}

  closeAllPanels() {
    this.accordion.closeAll();
  }
  openAllPanels() {
    this.accordion.openAll();
  }
}
