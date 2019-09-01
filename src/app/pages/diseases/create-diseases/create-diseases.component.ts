import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material';
import { NotificationService } from 'src/app/shared/notification.service';
import { DiseasesService } from 'src/app/shared/diseases.service';

@Component({
  selector: 'app-create-diseases',
  templateUrl: './create-diseases.component.html',
  styleUrls: ['./create-diseases.component.css']
})
export class CreateDiseasesComponent implements OnInit {

 
  constructor(public dialogRef: MatDialogRef<CreateDiseasesComponent>
    , private notificationService: NotificationService, private service: DiseasesService) { }

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
