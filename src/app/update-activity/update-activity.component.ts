import {Component} from '@angular/core';
import {UpdateSportActivityRequest} from "../model/sportActivity";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-activity',
  templateUrl: './update-activity.component.html',
  styleUrls: ['./update-activity.component.css']
})
export class UpdateActivityComponent {
  request: UpdateSportActivityRequest = {
    titleDTO: "",
    distanceInMetresDTO: 500,
    timeInMinutesDTO: 30,
    activityTypeDTO: "",
    howDoYouFeelDTO: ""

  }

  constructor(private httpClient: HttpClient, private router: Router) {
  }
// TODO: update activity function
  update(): void {
    this.httpClient.patch("http://localhost:8080/activity", this.request)
      .subscribe({
        next: value => {
          this.router.navigate(['/update-activity'])
        },
        error: err => {
          console.log("Error:" + err)
        }
      })
  }

  reset() {
// TODO: reset (clear) function
  }
}
