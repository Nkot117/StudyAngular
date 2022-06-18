import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MEMBERS } from '../members/member.mock';
import { Member } from '../model/member';

import { MessageService } from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private membersUrl = 'api/members'
  private httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  }

  constructor(
    private messageService : MessageService,
    private http: HttpClient
  ) { }

  public getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.membersUrl)
    .pipe(
      tap(membsers => this.log('社員データを取得しました')),
      catchError(this.handleError<Member[]>('getMembers', []))
    )
  }

  public getMember(id: number):Observable<Member> {
     const url = `${this.membersUrl}/${id}`
     return this.http.get<Member>(url).pipe(
       tap(_ => this.log(`社員データ（id=${ id }）を取得しました`)),
       catchError(this.handleError<Member>(`getMember id=${id}`))
     )
  }

  public updateMember(member: Member): Observable<any> {
    return this.http.put(this.membersUrl,member,this.httpOptions).
    pipe(
      tap(_ => this.log(`社員データ（id=${ member.id }）を変更しました`)),
      catchError(this.handleError<any>('updateMember'))
    )
  }

  private log(message: string): void {
    this.messageService.add(`MemberService: ${message}`)
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} 失敗：${error.message}`);

      return of(result as T)
    }
  }
}