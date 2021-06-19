import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tn-two-list',
  templateUrl: './tn-two-list.component.html',
  styleUrls: ['./tn-two-list.component.css']
})
export class TnTwoListComponent implements OnInit {
  contactModels: any[];

  constructor() { }

  ngOnInit() {
    this.contactModels = JSON.parse(sessionStorage.getItem("contactModel"));
  }

}
