import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material';
import { NotificationService } from 'src/app/shared/notification.service';
import { UserRolesService } from 'src/app/shared/user-roles.service';

@Component({
  selector: 'app-create-user-roles',
  templateUrl: './create-user-roles.component.html',
  styleUrls: ['./create-user-roles.component.css']
})
export class CreateUserRolesComponent implements OnInit {

  
  constructor(public dialogRef: MatDialogRef<CreateUserRolesComponent>
    , private notificationService: NotificationService, private service: UserRolesService) { }

  ngOnInit() {
  }


  onFormSubmit() {
    this.service.insertOrUpdate().subscribe(
      data => {

        console.log(data)
        this.notificationService.success('تمت العمليه بنجاح');
        this.onClose();
      },
      error => {
        console.log(error)
        this.notificationService.warn(error.message);
      }

    );

    
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
