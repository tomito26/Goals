import { Component } from '@angular/core';
import { Details } from '../app/details'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Entry =[
    new Details('My Journey As  Programmer',  new Date(2019,4,23), 'I started coding last year where I began learning html but could not maintain consistency of learning and aso I lacked motivation.Joining Moringa gave me a chance to learn and also meeting the daily objectives motivates me to continue learning'),
    new Details ('My Best Day', new Date(2020,4,25),'I learnt how to make my first website and this made me more curious to learn more and get insights on webdevelopment.I always feel happy when i learn something new'),
    new Details ('My Encounter With Angular',new Date(2020,8,19),'I was introduced to new javascript framework,it was kinda challenging to understand the framework but with time  i have been able to understand'),
    new Details ('Remote learning',new Date(2020,6,1),'The journey has been awesome enjoying the flexibility.As far as its fun it also has its own challenges such as distractions,power blackout and network issues')
  ]
  toggleEntry(index){
    this.Entry[index].showEntries = !this.Entry[index].showEntries
  }
  deleteEntry(removeEntry,index){
    if(removeEntry){
      let toDelete = confirm(`Are you sure you want to delete ${this.Entry[index].title}?`)

      if(toDelete){
        this.Entry.splice(index,1)
      }
    }
  }
  addNewEntry(subject){
    this.Entry.push(subject)
  }


}
