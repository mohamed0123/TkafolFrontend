import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NotificationService } from 'src/app/shared/notification.service';
import { AreaService } from 'src/app/shared/area.service';
import { CasesService } from 'src/app/shared/cases.service';
import { GovernmentService } from 'src/app/shared/government.service';
import { MaterialStateService } from 'src/app/shared/material-state.service';
import { ResearchTypeService } from 'src/app/shared/research-type.service';

@Component({
  selector: 'app-create-cases',
  templateUrl: './create-cases.component.html',
  styleUrls: ['./create-cases.component.css']
})
export class CreateCasesComponent implements OnInit {

  allAreas = []
  allGovernment = []
  allMatrialState = []
  allResearchType = []

  constructor(public dialogRef: MatDialogRef<CreateCasesComponent>, private service: CasesService,
    private materialStateService: MaterialStateService, private researchTypeService: ResearchTypeService, private areaService: AreaService,
    private notificationService: NotificationService, private governmentService: GovernmentService) { }

  ngOnInit() {


    this.researchTypeService.getAll().subscribe(
      data => {
        this.allResearchType = data
        console.table(this.allResearchType)
      }
    )

    this.areaService.getAll().subscribe(
      data => {
        this.allAreas = data
        console.table(this.allAreas)
      }
    )

    this.materialStateService.getAll().subscribe(
      data => {
        this.allMatrialState = data
        console.table(this.allMatrialState)
      }
    )

    this.governmentService.getAll().subscribe(
      data => {
        this.allGovernment = data
        console.table(this.allGovernment)
      }
    )
  }


  onFormSubmit() {
    this.service.insertOrUpdate(
      this.allAreas,
      this.allGovernment,
      this.allMatrialState,
      this.allResearchType).subscribe(
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
