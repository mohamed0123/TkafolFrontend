import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material';
import { NotificationService } from 'src/app/shared/notification.service';
import { AreaService } from 'src/app/shared/area.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<CreateComponent>
    , private notificationService: NotificationService, private service: AreaService) { }

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
