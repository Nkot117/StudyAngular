import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Member } from '../model/member';
import { MemberService } from '../service/member.service';

@Component({
  selector: 'app-member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.css']
})
export class MemberSearchComponent implements OnInit {
  public members$: Observable<Member[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private memberService : MemberService
  ) { }

  ngOnInit(): void {
    this.members$ = this.searchTerms
    .pipe(
      // キーボード入力の後、300ms待って次の処理を行う
      debounceTime(300),
      // 直前の検索キーワードと同じ場合は処理を実行しない
      distinctUntilChanged(),
      // 検索キーワードを受け取るたびに、新しいObservableに返す
      switchMap((term: string) => this.memberService.searchMembers(term))
    )
  }

  public search(term: string): void {
    this.searchTerms.next(term);
  }
}
