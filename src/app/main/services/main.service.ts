import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { UserStory } from '../entities/UserStory';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  apiURL = environment.apiProtocol + '://' + environment.apiHostName + ':' + environment.apiPort;

  constructor(private httpClient: HttpClient) { }
  

  initiateRecording (url: string, id: number, agent: string): Observable<any> {

    return this.httpClient.get<any>( this.apiURL + '/record/start?url=' + url + '&&id=' + id+'&&agent=' + agent)
      .pipe(
        catchError(this.handleError<any>('initiateRecording', []))
      );
  }

  executeUserStory(id: string) {
    return this.httpClient.get<any>(this.apiURL + '/record/play?id=' + id)
      .pipe(
        catchError(this.handleError<any>('Execute UserStory', []))
      );
  }

  getUserStories (id): Observable<UserStory[]> {
    return this.httpClient.get<any>(this.apiURL + '/userstory/sprint_stories?id=' + id)
      .pipe(
        catchError(this.handleError<any>('get sprint userstories', []))
      );
  }

  getUserStory (id: number): Observable<UserStory> {
    return this.httpClient.get<any>(this.apiURL + '/userstory/get?id=' + id)
      .pipe(
        catchError(this.handleError<any>('get userstory', []))
      );
  }

  getTestCases (id): Observable<any[]> {
    return this.httpClient.get<any>(this.apiURL + '/testcase/get_story?id=' + id)
      .pipe(
        catchError(this.handleError<any>('get story testcases', []))
      );
  }

  getTestCase (id): Observable<any[]> {
    return this.httpClient.get<any>(this.apiURL + '/testcase/get?id=' + id)
      .pipe(
        catchError(this.handleError<any>('get testcase details', []))
      );
  }

  getTestCaseSteps (id): Observable<any[]> {
    return this.httpClient.get<any>(this.apiURL + '/testcase/get_tc_steps?id=' + id)
      .pipe(
        catchError(this.handleError<any>('get testcase steps', []))
      );
  }

  executeTestCase (id): Observable<any[]> {
    return this.httpClient.get<any>(this.apiURL + '/execute/execute_tc?id=' + id)
      .pipe(
        catchError(this.handleError<any>('Execute test case', []))
      );
  }

  generateTestCases (id): Observable<any[]> {
    return this.httpClient.get<any>(this.apiURL + '/testcase/generate?id=' + id)
      .pipe(
        catchError(this.handleError<any>('Generate Test Cases', []))
      );
  }

  checkRecordStatus (id): Observable<Boolean> {
    return this.httpClient.get<any>(this.apiURL + '/record/status?id=' + id)
      .pipe(
        catchError(this.handleError<any>('Check record status', []))
      );
  }

  getProjects (): Observable<any[]> {
    return this.httpClient.get<any>(this.apiURL + '/userstory/projects')
      .pipe(
        catchError(this.handleError<any>('Get all projects', []))
      );
  }

  getSprints (): Observable<any[]> {
    return this.httpClient.get<any>(this.apiURL + '/userstory/sprints')
      .pipe(
        catchError(this.handleError<any>('Get all sprints', []))
      );
  }

  getProjectSprints (id): Observable<any[]> {
    return this.httpClient.get<any>(this.apiURL + '/userstory/project_sprints?id=' + id)
      .pipe(
        catchError(this.handleError<any>('Get project sprints', []))
      );
  }

  addStory (story): Observable<any[]> {
    return this.httpClient.post<any>(this.apiURL + '/userstory/add_story', story)
    .pipe(
      catchError(this.handleError('Add story', []))
    );
  }

  getLastResult (id): Observable<any[]> {
    return this.httpClient.get<any>(this.apiURL + '/testcase/get_testcase_lastresult?id=' + id)
      .pipe(
        catchError(this.handleError<any>('Get test case last result', []))
      );
  }

  getStoryTCLastResults (id): Observable<any[]> {
    return this.httpClient.get<any>(this.apiURL + '/testcase/get_story_tclast?id=' + id)
      .pipe(
        catchError(this.handleError<any>('get story testcases last results', []))
      );
  }

  getTestCaseResults (id): Observable<any[]> {
    return this.httpClient.get<any>(this.apiURL + '/report/testcase_results?id=' + id)
      .pipe(
        catchError(this.handleError<any>('get testcase results', []))
      );
  }

  getTestStepResults (id): Observable<any[]> {
    return this.httpClient.get<any>(this.apiURL + '/report/teststep_results?id=' + id)
      .pipe(
        catchError(this.handleError<any>('get teststep results', []))
      );
  }

  addSprint (id): Observable<any[]> {
    return this.httpClient.get<any>(this.apiURL + '/userstory/add_sprint?id=' + id)
      .pipe(
        catchError(this.handleError<any>('Add new sprint to project', []))
      );
  }

  createAgent (name, type, browser, platform): Observable<any[]> {
    return this.httpClient.get(this.apiURL + '/agent/create?name=' + name + '&type=' + type + '&browser=' + browser + '&platform=' + platform, {responseType: 'text'})
      .pipe(
        catchError(this.handleError<any>('Configure and create a new agent', []))
      );
  }

  downloadAgent (url) {
    console.log(url)
    window.open(this.apiURL + '/agent/get_agent?zipName=' + url);
  }

  getAssignedAgents (storyID): Observable<any[]> {
    return this.httpClient.get<any>(this.apiURL + '/agent/get_assigned_agents?storyID=' + storyID)
      .pipe(
        catchError(this.handleError<any>('get assigned agents', []))
      );
  }

  getUNAssignedAgents (storyID): Observable<any[]> {
    return this.httpClient.get<any>(this.apiURL + '/agent/get_unassigned_agents?storyID=' + storyID)
      .pipe(
        catchError(this.handleError<any>('get unassigned agents', []))
      );
  }

  assignAgent (storyID, agentID): Observable<any[]> {
    return this.httpClient.get(this.apiURL + '/agent/assign_agent?storyID=' + storyID+'&agentID='+agentID, {responseType: 'text'})
      .pipe(
        catchError(this.handleError<any>('assign agent', []))
      );
  }

  unassignAgent (storyID, agentID): Observable<any[]> {
    return this.httpClient.get(this.apiURL + '/agent/remove_agent?storyID=' + storyID+'&agentID='+agentID, {responseType: 'text'})
      .pipe(
        catchError(this.handleError<any>('unassign agent', []))
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