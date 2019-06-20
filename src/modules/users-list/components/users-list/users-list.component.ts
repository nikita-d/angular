import {Component, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {UserInterface} from '../../../../interfaces';
import {ApiService} from '../../../core/services';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  displayedColumns = ['first_name', 'last_name', 'email'];
  userList: any[] = [];
  pagesCount: number;

  constructor(private activatedRoute: ActivatedRoute,
              private apiService: ApiService,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.data.pipe(
      map(data => data.paginationInfo)
    )
      .subscribe(paginationInfo => {
        this.pagesCount = paginationInfo.total;
        this.userList = paginationInfo.data;
      });
  }

  pageChanged(event: PageEvent): void {
    const page: number = event.pageIndex + 1;
    this.apiService.fetchUsers(page)
      .subscribe(dataPage => {
        this.userList = dataPage;
      });
  }

  userSelected(user: UserInterface): void {
    this.router.navigate(['./user', user.id]);
  }
}
