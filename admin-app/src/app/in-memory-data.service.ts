import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Member } from './model/member';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  public createDb(): {} {
    const members = [
      { id: 11, name: '武山 岳大' },
      { id: 12, name: '駒倉 光紀' },
      { id: 13, name: '長田 研太' },
      { id: 14, name: '高藤 友梨香' },
      { id: 15, name: '浜崎 貴之' },
      { id: 16, name: '緑川 睦' },
      { id: 17, name: '森谷 怜奈' },
      { id: 18, name: '大槻 祐大' },
      { id: 19, name: '岩野 紀之' },
      { id: 20, name: '佐々木 小次郎' }
    ]
    return { members }
  }

  public genId(members: Member[]):number {
    return members.length > 0 ? Math.max(...members.map( member => member.id)) + 1 : 11;
  }

}