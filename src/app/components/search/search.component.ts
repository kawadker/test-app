import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  username = new FormControl('', [Validators.required]);

  isEmpty: boolean = false;
  userDetails: any = {};
  IsUserData: boolean = false;
  constructor(
    private apiService: ApiService
  ) { }


  ngOnInit(): void {
  }
  serachUser(username: any) {
    console.log("userName", username);
    this.isEmpty = username.value.length == 0
    if (!this.isEmpty) {
      this.apiService.getUserDetails(username.value).subscribe(res => {
        console.log(res);

        if (res && res['status'] == 200) {
          this.userDetails = res['body']
          this.IsUserData = true
        } else {
          this.userDetails = {}
        }

      })
    }
  };
}
