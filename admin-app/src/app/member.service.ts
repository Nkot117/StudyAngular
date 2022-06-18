import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MEMBERS } from './members/member.mock';
import { Member } from './model/member';

import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private messageService : MessageService
  ) { }

  public getMembers(): Observable<Member[]> {
    this.messageService.add("MemberService：社員一覧データを取得")
    return of(MEMBERS);
  }
}
