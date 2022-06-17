import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MEMBERS } from './members/member.mock';
import { Member } from './model/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
  ) { }

  public getMembers(): Observable<Member[]> {
    return of(MEMBERS);
  }
}
