import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
 goal:Goal;
 
  constructor(private route:ActivatedRoute, private service:GoalService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.goal = this.service.getGoal(id)
  }

}
