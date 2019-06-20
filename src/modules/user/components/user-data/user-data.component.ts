import { Component, Input, OnInit, Optional, OnChanges, SimpleChanges } from '@angular/core';
import { UserInterface } from '../../../../interfaces';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit, OnChanges {

  @Input() user: UserInterface;

  public isUserLoaded = false;
  public userData: UserInterface = null;


  constructor(@Optional() private parent: UserComponent) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const userChanges = changes.user;

    if (!!userChanges.currentValue) {
      if (Object.keys(userChanges.currentValue).length > 0) {
        this.isUserLoaded = true;
        this.userData = userChanges.currentValue.data;
      }
    }
  }
}
