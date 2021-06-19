import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-tn-one',
  templateUrl: './tn-one.component.html',
  styleUrls: ['./tn-one.component.css']
})
export class TnOneComponent implements OnInit {

  @ViewChild('txtInput1', { static: false }) txtInput1: ElementRef;
  @ViewChild('txtInput2', { static: false }) txtInput2: ElementRef;
  @ViewChild('txtInput3', { static: false }) txtInput3: ElementRef;
  @ViewChild('btnSubmit', { static: false }) btnSubmit: ElementRef;
  @ViewChild('txtDisplayArea', { static: false }) txtDisplayArea: ElementRef;

  html: string;
  inputList: any[] = [];

  constructor() { }

  ngAfterViewInit(): void {
    this.btnSubmit.nativeElement.onclick = () => { this.onSubmit(); };
  }

  onSubmit() {
    let input1 = this.txtInput1.nativeElement.value;
    let input2 = this.txtInput2.nativeElement.value;
    let input3 = this.txtInput3.nativeElement.value;

    this.inputList.push({
      "input1": input1,
      "input2": input2,
      "input3": input3
    });
    
    this.html = `
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead class="table-dark">
          <tr>
            <th scope="col">Input 1</th>
            <th scope="col">Input 2</th>
            <th scope="col">Input 3</th>
          </tr>
        </thead>
        <tbody>`;
    for(let inputIndex in this.inputList) {
      let input = this.inputList[inputIndex];
      this.html += `
              <tr>
                <td>${input.input1}</td>
                <td>${input.input2}</td>
                <td>${input.input3}</td>
              </tr>`;
    }
    this.html += `
        </tbody>
      </table>
    </div>`;
    this.txtDisplayArea.nativeElement.innerHTML = this.html;
  }

  ngOnInit() {
  }

}
