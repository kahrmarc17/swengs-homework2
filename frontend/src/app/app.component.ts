import {Component} from '@angular/core';
import {UserService} from './service/user.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {DialogComponent} from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isLoggedIn = false;


  constructor(private userService: UserService, public matDialog: MatDialog) {
  }

  openLogoutDialog() {
    const userId = 'user01';
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'dialog-component';
    dialogConfig.height = '350px';
    dialogConfig.width = '600px';
    dialogConfig.data = {
      name: 'logout',
      title: 'Are you sure you want to logout?',
      description: 'If you click LOGOUT your session will be closed!',
      actionButtonText: 'Logout',
      userId
    };
    this.matDialog.open(DialogComponent, dialogConfig);
  }

  ngOnInit() {
    this.userService.isLoggedIn.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

}
