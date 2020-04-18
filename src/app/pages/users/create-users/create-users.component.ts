import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { BranchService } from 'src/app/shared/branch.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { UsersService } from 'src/app/shared/users.service';
import { AreaService } from 'src/app/shared/area.service';
import { GenderService } from 'src/app/shared/gender.service';
import { UserRolesService } from 'src/app/shared/user-roles.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {


  allAreas = []
  allMangers = []
  allBranchs = []
  allGender = []
  allRules = []
  constructor(public dialogRef: MatDialogRef<CreateUsersComponent>, private userRolesService: UserRolesService, private genderService: GenderService, private branchService: BranchService, private areaService: AreaService,
    private notificationService: NotificationService, private service: UsersService) { }

  ngOnInit() {



    this.userRolesService.getAll().subscribe(
      data => {
        this.allRules = data
        console.table(this.allRules)
      }
    )

    this.genderService.getAll().subscribe(
      data => {
        this.allGender = data
        console.table(this.allGender)
      }
    )

    this.branchService.getAll().subscribe(
      data => {
        this.allBranchs = data
        console.table(this.allBranchs)
      }
    )

    this.areaService.getAll().subscribe(
      data => {
        this.allAreas = data
        console.table(this.allAreas)
      }
    )


    // this.service.getUsersByRule(0).subscribe(
      this.service.getAll().subscribe(
        data => {
        this.allMangers = data
        console.table(this.allMangers)
      }
    )
  }


  onFormSubmit() {

    this.service.insertOrUpdate(
     this. allAreas ,
     this.allMangers ,
     this.allBranchs ,
     this.allGender ,
     this.allRules ).subscribe(
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
