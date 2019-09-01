import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material';
import { NotificationService } from 'src/app/shared/notification.service';
import { MaterialStateService } from 'src/app/shared/material-state.service';
 
@Component({
  selector: 'app-create-material-state',
  templateUrl: './create-material-state.component.html',
  styleUrls: ['./create-material-state.component.css']
})
export class CreateMaterialStateComponent implements OnInit {

  
  constructor(public dialogRef: MatDialogRef<CreateMaterialStateComponent>
    , private notificationService: NotificationService, private service: MaterialStateService) { }

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
