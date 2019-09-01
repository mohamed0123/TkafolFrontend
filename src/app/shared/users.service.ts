import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  serviceUrl: string = 'http://localhost:8080/userApi/';

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    phone: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl(''),
    user_name: new FormControl('', Validators.required),
    role: new FormControl(null, Validators.required),
    manager: new FormControl(null),
    gender: new FormControl(null, Validators.required),
    area: new FormControl(null, Validators.required),
    branch: new FormControl(null),
    address: new FormControl(null),
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      phone: null,
      password: null,
      email: null,
      user_name: null,
      role: null,
      manager: null,
      gender: null,
      area: null,
      branch: null,
      address: null
    });
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

  filterExactName(areasAll, val) {
    return areasAll.filter((ele) => {
      return ele.name == val
    })
  }


  insertOrUpdate(
    allAreas,
    allMangers,
    allBranchs,
    allGender,
    allRules) {


    let user = {
      id: this.form.value.id,
      address: this.form.value.address,
      email: this.form.value.email,
      password: this.form.value.password,
      phone: this.form.value.phone,
      userName: this.form.value.user_name,
      area: this.filterExactName(allAreas, this.form.value.area)[0],
      branch: this.filterExactName(allBranchs, this.form.value.branch)[0],
      userRole: this.filterExactName(allRules, this.form.value.role)[0],
      user: this.filterExactName(allMangers, this.form.value.manager)[0],
      gender: this.filterExactName(allGender, this.form.value.gender)[0],
    }


    console.log(user)
    console.log(`${this.serviceUrl}create`)
    return this.http.post<any>(`${this.serviceUrl}create`, user).pipe(catchError(this.errorHandler));
  }

  getAll() {
    console.log(`${this.serviceUrl}all`)
    return this.http.get<any>(`${this.serviceUrl}all`).pipe(catchError(this.errorHandler));
  }


  getUsersByRule(ruleId) {
    console.log(`${this.serviceUrl}getByRuleId${ruleId}`)
    return this.http.get<any>(`${this.serviceUrl}getByRuleId/${ruleId}`).pipe(catchError(this.errorHandler));

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
      phone: row.phone,
      password: row.password,
      email: row.email,
      address: row.address,
      user_name: row.userName,
      role: row.role ? row.role.name : '',
      manager: row.user ? row.user.name : '',
      gender: row.gender ? row.gender.name : '',
      area: row.area ? row.area.name : '',
      branch: row.branch ? row.branch.name : ''
    })

  }
}
