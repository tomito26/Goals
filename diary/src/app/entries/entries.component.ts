import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Details } from '../details';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {
  @Input() userEntry:Details;
  @Output() removeEntry = new EventEmitter <boolean>();
  
  
  entrydelete(deleteItem:boolean){
    this.removeEntry.emit(deleteItem)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
