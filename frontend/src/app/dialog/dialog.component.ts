import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(private userService: UserService,
              private dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) private dialogData: any) {
              console.log(this.dialogData);
  }


  ngOnInit() {
  }


  actionFunction() {
    this.userService.logout();
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
