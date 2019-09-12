import { Component, OnInit, ViewChild, SimpleChanges, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { DialogService } from 'src/app/shared/dialog.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { ExcelService } from 'src/app/helper/excel.service';
import { ResearchTypeService } from 'src/app/shared/research-type.service';
import { CreateResearchTypeComponent } from '../create-research-type/create-research-type.component';


@Component({
  selector: 'app-edit-research-type',
  templateUrl: './edit-research-type.component.html',
  styleUrls: ['./edit-research-type.component.css']
})
export class EditResearchTypeComponent implements OnInit {

 
  displayedColumns: string[] = ['UPDATE', 'LST', 'CREATIONDATE', 'NAME'];
  checker;
  dataArray: MatTableDataSource<any>;
  tableData = []
  start_date = new Date();
  end_date = new Date();
  searchKey;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private service: ResearchTypeService,
    private notificationService: NotificationService, private dialog: MatDialog,
    private dialogService: DialogService, private excelService: ExcelService) { }

  ngOnInit() {
    this.loadData();
  }


  setEndDate(event): void {
    this.end_date = event;
  }

  setStartDate(event): void {
    this.start_date = event;
  }

  loadData() {

    this.service.getAll().subscribe(data => {
      if (data) {
        this.tableData = []
        this.dataArray = new MatTableDataSource<any>(this.tableData);    
this.dataArray.filterPredicate = (data: any, filterValue:string) => {
      const dataStr =JSON.stringify(data).toLowerCase();
      return dataStr.indexOf(filterValue) != -1; 
    }
        this.dataArray.filter = ''
        this.dataArray.paginator = this.paginator;

        if (data.length > 0) {
          console.table(data)

          data.forEach(element => {
            this.tableData.push(element)
          });

          this.dataArray = new MatTableDataSource<any>(this.tableData);    
this.dataArray.filterPredicate = (data: any, filterValue:string) => {
      const dataStr =JSON.stringify(data).toLowerCase();
      return dataStr.indexOf(filterValue) != -1; 
    }
          this.dataArray.filter = ''
          this.dataArray.paginator = this.paginator;
        }

      }

    },
      error => {
        //  this.successMsg = NaN
        //  this.errorMsg = error.message
        this.notificationService.warn(error.message)
      });
  }


  onSearchClear() {
    this.applyFilter("");
  }


  applyFilter(filterValue: string) {
    this.dataArray.filter = filterValue.trim().toLowerCase();
  }


  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    let dialogRef = this.dialog.open(CreateResearchTypeComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data=>{

      this.loadData();
    });
  }


  onEdit(row) {
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    let dialogRef = this.dialog.open(CreateResearchTypeComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data=>{

      this.loadData();
    });
  }

  onDelete($key) {
    this.dialogService.openConfirmDialog('هل انت متأكد من الحذف؟')
      .afterClosed().subscribe(res => {

        if (res) {
          this.service.deleteById($key).subscribe(() => {
            this.notificationService.success(' تم الحذف بنجاح !');
            this.loadData();
          },
            error => {
              this.notificationService.warn(error.message)

            });
        }
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('gggggggggggggggg')
    this.loadData();

  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile('sample');
  }

}
