import { Component, OnInit } from '@angular/core';
import { Member } from '../model/member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  public member: Member = {
    id: 1,
    name: "田中"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
