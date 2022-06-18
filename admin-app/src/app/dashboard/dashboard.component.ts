import { Component, OnInit } from '@angular/core';
import { Member } from '../model/member';
import { MemberService } from '../member.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public members: Member[] = []


  constructor(
    private memberService: MemberService,
    private messageService: MessageService
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
