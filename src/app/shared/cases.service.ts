import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class CasesService {

  serviceUrl: string = 'http://localhost:8080/caseApi/';

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    address: new FormControl('', Validators.required),
    caseName: new FormControl('', Validators.required),
    fileNumber: new FormControl('', Validators.required),
    idIssuedDate: new FormControl('', Validators.required),
    idNumber: new FormControl('', Validators.required),
    researchDate: new FormControl('', Validators.required),
    telephone: new FormControl('', Validators.required),
    area: new FormControl('', Validators.required),
    government: new FormControl('', Validators.required),
    matrialState: new FormControl('', Validators.required),
    researchType: new FormControl('', Validators.required)

  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      address: '',
      caseName: '',
      fileNumber: '',
      idIssuedDate: '',
      idNumber: '',
      researchDate: '',
      telephone: '',
      area: '',
      government: '',
      matrialState: '',
      researchType: ''

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

  insertOrUpdate(allAreas,
    allGovernment,
    allMatrialState,
    allResearchType,
  ) {

    let branch = {
      id: this.form.value.id,
      address: this.form.value.address,
      caseName: this.form.value.caseName,
      fileNumber: this.form.value.fileNumber,
      idIssuedDate: this.form.value.idIssuedDate,
      idNumber: this.form.value.idNumber,
      researchDate: this.form.value.researchDate,
      telephone: this.form.value.telephone,
      area: this.filterExactName(allAreas, this.form.value.area)[0],
      government: this.filterExactUserName(allGovernment, this.form.value.government)[0],
      matrialState: this.filterExactUserName(allMatrialState, this.form.value.matrialState)[0],
      researchType: this.filterExactUserName(allResearchType, this.form.value.researchType)[0],


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
      address: row.address,
      caseName: row.caseName,
      fileNumber: row.fileNumber,
      idIssuedDate: row.idIssuedDate,
      idNumber: row.idNumber,
      researchDate: row.researchDate,
      telephone: row.telephone,
      area: row.area ? row.area.name : '',
      government: row.government ? row.government.name : '',
      matrialState: row.matrialState ? row.matrialState.name : '',
      researchType: row.researchType ? row.researchType.name : '',
    })

  }
}
