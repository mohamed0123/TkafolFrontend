import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material';
import { NotificationService } from 'src/app/shared/notification.service';
import { ResearchTypeService } from 'src/app/shared/research-type.service';

@Component({
  selector: 'app-create-research-type',
  templateUrl: './create-research-type.component.html',
  styleUrls: ['./create-research-type.component.css']
})
export class CreateResearchTypeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateResearchTypeComponent>
    , private notificationService: NotificationService, private service: ResearchTypeService) { }

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
