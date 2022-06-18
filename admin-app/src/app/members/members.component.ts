import { Component, OnInit } from '@angular/core';
import { Member } from '../model/member';
import { MemberService } from '../service/member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  public members : Member[];

  constructor(
    // 依存性の注入（DI）
    private memberService : MemberService,
  ) { }

  // ライフサイクルメソッド
  ngOnInit(): void {
    this.getMembers()
  }

  private getMembers(): void {
    this.memberService.getMembers()
    .subscribe(members => {
      this.members = members
    }
    );
  }

  public add(name: string): void {
    const trimName = name.trim()
    if(!trimName){
      return
    }

    this.memberService.addMember({name} as Member).subscribe(
      member => {
        this.members.push(member)
      }
    )
  }

}
