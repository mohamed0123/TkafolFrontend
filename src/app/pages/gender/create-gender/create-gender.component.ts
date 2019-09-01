import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material';
import { NotificationService } from 'src/app/shared/notification.service';
import { GenderService } from 'src/app/shared/gender.service';
 
@Component({
  selector: 'app-create-gender',
  templateUrl: './create-gender.component.html',
  styleUrls: ['./create-gender.component.css']
})
export class CreateGenderComponent implements OnInit {

 

  constructor(public dialogRef: MatDialogRef<CreateGenderComponent>
    , private notificationService: NotificationService, private service: GenderService) { }

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
