import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MEMBERS } from '../members/member.mock';
import { Member } from '../model/member';

import { MessageService } from './message.service'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private membersUrl = 'api/members'

  constructor(
    private messageService : MessageService,
    private http: HttpClient
  ) { }

  public getMembers(): Observable<Member[]> {
    this.messageService.add("MemberService：社員一覧データを取得しました")
    return this.http.get<Member[]>(this.membersUrl)
  }

  public getMember(id: number):Observable<Member> {
    this.messageService.add(`MemberService：社員データ（id=${ id }）を取得しました`)
    return of(MEMBERS.find(member => member.id === id))
  }

  private log(message: string): void {
    this.messageService.add(`MemberService: ${message}`)
  }
}
