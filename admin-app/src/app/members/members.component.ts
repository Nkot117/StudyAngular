import { Component, OnInit } from '@angular/core';
import { Member } from '../model/member';
import { Members } from './member.mock';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {


  public members : Member[] = Members;
  public selectedMember: Member;

  constructor() { }

  ngOnInit(): void {
  }

  public onSelect(member:Member):void {
    this.selectedMember = member;
  }

}
