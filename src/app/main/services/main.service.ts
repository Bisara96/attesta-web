import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { UserStory } from '../entities/UserStory';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private httpClient: HttpClient) { }
  

  initiateRecording (url: string,id: number): Observable<any> {

    return this.httpClient.get<any>('http://localhost:8080/record/start?url='+url+'&&id='+id)
      .pipe(
        catchError(this.handleError<any>('initiateRecording', []))
      );
  }

  executeUserStory(id: string) {
    return this.httpClient.get<any>('http://localhost:8080/record/play?id='+id)
      .pipe(
        catchError(this.handleError<any>('Execute UserStory', []))
      );
  }

  getUserStories (): Observable<UserStory[]> {
    return this.httpClient.get<any>('http://localhost:8080/userstory/getall')
      .pipe(
        catchError(this.handleError<any>('get all userstories', []))
      );
  }

  getUserStory (id: number): Observable<UserStory> {
    return this.httpClient.get<any>('http://localhost:8080/userstory/get?id='+id)
      .pipe(
        catchError(this.handleError<any>('get userstory', []))
      );
  }

  getTestCases (id): Observable<any[]> {
    return this.httpClient.get<any>('http://localhost:8080/testcase/get_story?id='+id)
      .pipe(
        catchError(this.handleError<any>('get story testcases', []))
      );
  }

  getTestCase (id): Observable<any[]> {
    return this.httpClient.get<any>('http://localhost:8080/testcase/get?id='+id)
      .pipe(
        catchError(this.handleError<any>('get testcase details', []))
      );
  }

  getTestCaseSteps (id): Observable<any[]> {
    return this.httpClient.get<any>('http://localhost:8080/testcase/get_tc_steps?id='+id)
      .pipe(
        catchError(this.handleError<any>('get testcase steps', []))
      );
  }

  executeTestCase (id): Observable<any[]> {
    return this.httpClient.get<any>('http://localhost:8080/execute/execute_tc?id='+id)
      .pipe(
        catchError(this.handleError<any>('Execute test case', []))
      );
  }

  generateTestCases (id): Observable<any[]> {
    return this.httpClient.get<any>('http://localhost:8080/testcase/generate?id='+id)
      .pipe(
        catchError(this.handleError<any>('Generate Test Cases', []))
      );
  }

  checkRecordStatus (id): Observable<Boolean> {
    return this.httpClient.get<any>('http://localhost:8080/record/status?id='+id)
      .pipe(
        catchError(this.handleError<any>('Check record status', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}