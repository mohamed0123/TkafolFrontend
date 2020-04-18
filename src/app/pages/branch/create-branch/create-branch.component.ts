import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { BranchService } from 'src/app/shared/branch.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { AreaService } from 'src/app/shared/area.service';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-create-branch',
  templateUrl: './create-branch.component.html',
  styleUrls: ['./create-branch.component.css']
})
export class CreateBranchComponent implements OnInit {

  allAreas = []
  allMangers = []
  
  constructor(public dialogRef: MatDialogRef<CreateBranchComponent> ,  private usersService: UsersService ,  private areaService:AreaService,  
      private notificationService: NotificationService, private service: BranchService) { }

  ngOnInit() {

    this.areaService.getAll().subscribe(
      data => {
        this.allAreas = data
        console.table(this.allAreas)
      }
    )


    // this.usersService.getUsersByRule(1).subscribe(
      this.usersService.getAll().subscribe(
        data => {
        this.allMangers = data
        console.log('managers')
        console.table(this.allMangers)
      }
    )
  }


  onFormSubmit() {
    this.service.insertOrUpdate(
     this. allAreas ,
     this. allMangers ).subscribe(
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
