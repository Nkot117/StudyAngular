import { Component, OnInit } from '@angular/core';
import { Member } from '../model/member';
import { MemberService } from '../member.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  public members : Member[];
  public selectedMember: Member;

  constructor(
    // 依存性の注入（DI）
    private memberService : MemberService,
    private messageService: MessageService
  ) { }

  // ライフサイクルメソッド
  ngOnInit(): void {
    this.getMembers()
  }

  public onSelect(member:Member):void {
    this.selectedMember = member;
    this.messageService.add(`MembersComponent：社員データ（id=${member.id})が選択されました`)
  }

  private getMembers(): void {
    this.memberService.getMembers()
    .subscribe(members => {
      this.members = members
    }
    );
  }

}
