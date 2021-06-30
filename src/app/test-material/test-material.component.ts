import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-test-material',
  templateUrl: './test-material.component.html',
  styleUrls: ['./test-material.component.css']
})
export class TestMaterialComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  someDate: Date;
  someNumber: number;
  someString: string;
  someArray: string[];
  someObject: {};
  someObjectArray: {}[];


  constructor() { }

  ngOnInit() {
    this.someDate = new Date();
    this.someNumber = 123123;
    this.someString = "zcsasg fbast";
    this.someArray = ['One', 'Two', 'Three'];
    this.someObject = {};
    this.someObjectArray = [{}];
  }

}
