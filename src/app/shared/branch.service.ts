import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class BranchService {

  serviceUrl: string = 'http://localhost:8080/branchApi/';

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    address: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    area: new FormControl('', Validators.required),
    area_manager: new FormControl('', Validators.required),
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      address:null,
      name: '',
      area:null,
      area_manager:null

    });
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

  filterExactName(all, val) {
    return all.filter((ele) => {
      return ele.name == val
    })
  }

  filterExactUserName(all, val) {
    return all.filter((ele) => {
      return ele.name == val
    })
  }

  insertOrUpdate(   allAreas ,
     allMangers ) {

    let branch = {
      id : this.form.value.id,
      address : this.form.value.address,
      name : this.form.value.name,
      area :this.filterExactName(allAreas,  this.form.value.area)[0]  ,
      user : this.filterExactUserName(allMangers, this.form.value.id)[0] ,


    }  

    console.log(branch)
    console.log(`${this.serviceUrl}create`)
    return this.http.post<any>(`${this.serviceUrl}create`, branch).pipe(catchError(this.errorHandler));
  }

  getAll() {
    return this.http.get<any>(`${this.serviceUrl}all`).pipe(catchError(this.errorHandler));
  }

  getAllByDate(startDate, endDate) {

    return this.http.post<any>(`${this.serviceUrl}byDate`, { startDate: startDate, endDate: endDate }).pipe(catchError(this.errorHandler));

  }

  deleteById(id): Observable<any> {
    console.log(`${this.serviceUrl}deleteById/${id}`)
    return this.http.delete(`${this.serviceUrl}deleteById/${id}`).pipe(catchError(this.errorHandler));
  }

  populateForm(row) {

    this.form.setValue({
      id: row.id,
      address:row.address,
      name: row.name,
      area:row.area.name,
      area_manager:row.area_manager.userName
    })

  }
}
