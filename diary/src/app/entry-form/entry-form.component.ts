import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Details } from '../details';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {
  newEntry = new Details ("", new Date(),"");
  @Output()  addEntry = new EventEmitter<Details>();
  
  submitEntry(){
    this.addEntry.emit(this.newEntry)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
