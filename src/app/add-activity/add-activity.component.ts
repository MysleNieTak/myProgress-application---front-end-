import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {CreateSportActivityRequest} from "../model/sportActivity";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";
import {HttpClient} from "@angular/common/http";
import {SportActivityListComponent} from "../sport-activity-list/sport-activity-list.component";

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent {

  request: CreateSportActivityRequest = {
    titleDTO: "",
    dateDTO: new Date(),
    distanceInMetresDTO: 500,
    timeInMinutesDTO: 30,
    userNameDTO: "",
    activityTypeDTO: "",
    howDoYouFeelDTO: ""

  }

  constructor(private httpClient: HttpClient, private router: Router) {

  }

  send(): void {

    this.httpClient.post("http://localhost:8080/activity", this.request)
      .subscribe({
        next: value => {
          this.router.navigate(['/add-activity'])
        },
        error: err => {
          console.log("Error: " + err)
        }
      })

  }

  reset(): void {
// TODO: to 'reset' function the information filled before sending new request
  }


}
