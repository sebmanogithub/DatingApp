import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}

  // private readonly AccountService _accountService;
  // public NavComponent(AccountService accountService)
  // {
  //   this._accountService = accountService;
  // }
  constructor(public accountService : AccountService) { }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  logout() {
    this.accountService.logout();
  }
}
