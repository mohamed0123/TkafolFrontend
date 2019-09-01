import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material';
import { NotificationService } from 'src/app/shared/notification.service';
import { GovernmentService } from 'src/app/shared/government.service';
 
@Component({
  selector: 'app-create-government',
  templateUrl: './create-government.component.html',
  styleUrls: ['./create-government.component.css']
})
export class CreateGovernmentComponent implements OnInit {

 

  constructor(public dialogRef: MatDialogRef<CreateGovernmentComponent>
    , private notificationService: NotificationService, private service: GovernmentService) { }

  ngOnInit() {
  }


  onFormSubmit() {
    this.service.insertOrUpdate().subscribe(
      data => {

        console.log(data)
        this.notificationService.success('تمت العمليه بنجاح');

      },
      error => {
        console.log(error)
        this.notificationService.warn(error.message);
      }

    );

    this.onClose();
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
