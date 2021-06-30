import { Component, OnInit, AfterViewInit } from '@angular/core';

import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './test-home.component.html',
  styleUrls: ['./test-home.component.css']
})
export class TestHomeComponent implements OnInit, AfterViewInit {
  options: any = {};
  isLoggedIn = false;
  showAdminBoard = false;
  userList: any[] = [];
  getAllError: string;

  constructor(private userService: UserService, private tokenStorageService: TokenStorageService) { }

  ngAfterViewInit(): void {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
      legend: {
        data: ['bar', 'bar2'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: (idx) => idx * 10,
        },
        {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: (idx) => idx * 10 + 100,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 5,
    };
  }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.showAdminBoard = user.roles.includes('ROLE_ADMIN');

      if (this.showAdminBoard) {
        this.userService.getAll().subscribe(
          data => {
            this.userList = data;
          },
          err => {
            this.getAllError = err;
          }
        );
      }
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
