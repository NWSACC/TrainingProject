import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tn-four-second',
  templateUrl: './tn-four-second.component.html',
  styleUrls: ['./tn-four-second.component.css']
})
export class TnFourSecondComponent implements OnInit {
  inputValue1: string;
  inputValue2: string;
  fromFirst: any;

  constructor(private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.fromFirst = this.actRoute.snapshot.queryParams;
  }

  onSubmitToFirst() {
    this.router.navigate(["/TnFourFirst"], {queryParams: {
      inputValue1: this.inputValue1,
      inputValue2: this.inputValue2
    }});
  }
}
