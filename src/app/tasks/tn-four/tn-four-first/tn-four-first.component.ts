import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tn-four-first',
  templateUrl: './tn-four-first.component.html',
  styleUrls: ['./tn-four-first.component.css']
})
export class TnFourFirstComponent implements OnInit {
  inputValue1: string;
  inputValue2: string;
  fromSecond: any;

  constructor(private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.fromSecond = this.actRoute.snapshot.queryParams;
  }

  onSubmitToSecond() {
    this.router.navigate(["/TnFourSecond"], {queryParams: {
      inputValue1: this.inputValue1,
      inputValue2: this.inputValue2
    }});
  }
}
