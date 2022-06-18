import { Component, Input, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../model/member';
import { MemberService } from '../service/member.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
  @Input() member: Member;

  constructor(
    // URLパラメータから値を取得するために利用
    private route: ActivatedRoute,
    private memberService: MemberService,
    // 遷移元に戻るために利用
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getMember()
  }

  private getMember():void {
    // URLのパラメータの値を取得する
    const id = +this.route.snapshot.paramMap.get('id')
    this.memberService.getMember(id)
    .subscribe(member => {
      this.member = member
    })
  }

  public goBack():void {
  this.location.back()
  }

}
