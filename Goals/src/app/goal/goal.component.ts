import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from  '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';
import { Quote } from '../quote-class/quote';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import{ QuoteRequestService } from '../quote-http/quote-request.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals = []
  alertService: AlertService;
  quote:Quote;

  goToUrl(id){
    this.router.navigate(['/goals',id])
  }

  deleteGoal(index){
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if(toDelete){
        this.goals.splice(index,1);
        this.alertService.alertMe("The goal has been deleted")
      }
     
  }

  addNewGoal(goal){
   let goalObject = new Goal (goal.id,Goal.name,goal.description,goal.completeDate)
   this.goals.push(goalObject)
  };

  

  constructor(goalService:GoalService,alertService:AlertService,private http:HttpClient,private quoteService:QuoteRequestService,private router:Router) { 
    this.goals = goalService.getGoals()
    this.alertService = alertService;
    
  
  
  };

  ngOnInit() {
  

    this.quoteService.quoteRequest()
    this.quote =  this.quoteService.quote
  }
  //   interface ApiResponse{

  //     author:string
  //     quote:string
  //   }
  //   this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
  //     // Succesful API request
  //     this.quote = new Quote(data.author, data.quote)
  //   }, err=>{
  //     this.quote = new Quote("Wiston Churchill","Never never give up")
  //     console.log('An error Occurred')
  //   })
  // };

}
