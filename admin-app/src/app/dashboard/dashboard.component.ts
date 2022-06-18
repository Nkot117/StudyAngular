import { Component, OnInit } from '@angular/core';
import { Member } from '../model/member';
import { MemberService } from '../service/member.service';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // htmlテンプレートから参照するmembers
  public members: Member[] = []

  constructor(
    private memberService: MemberService,
  ) { }

  ngOnInit(): void {
    this.getMembres()
  }

  private getMembres():void {
    this.memberService.getMembers()
    .subscribe(members => {
      // membersの2 ~ 5番目の役員のメンバー情報を取得する
      this.members = members.slice(1,5)
    })
  }

}
