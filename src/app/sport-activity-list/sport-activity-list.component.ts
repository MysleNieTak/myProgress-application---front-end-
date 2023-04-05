import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SportActivity} from "../model/sportActivity";
import {tsCastToAny} from "@angular/compiler-cli/src/ngtsc/typecheck/src/ts_util";
import {SpeedActivity} from "../model/speedActivity";
import {Router} from "@angular/router";


// @ts-ignore
@Component({
  selector: 'app-sport-activity-list',
  templateUrl: './sport-activity-list.component.html',
  styleUrls: ['./sport-activity-list.component.css']
})
export class SportActivityListComponent {

  sportActivitiesList: SportActivity[] = []
  columnsToDisplayList: string[] = [

    'sportActivity-title-col',
    'sportActivity-date-col',
    'sportActivity-distanceInMetres-col',
    'sportActivity-timeInMinutes-col',

    /**          'sportActivity-speed-col',         */

    'sportActivity-activityType-col',
    'sportActivity-howDoYouFeel-col',
    'sportActivity-edit-col',
    'sportActivity-delete-col',

  ]


  speedActivityList: SpeedActivity[] = []
  columnToDisplayList: string [] = [
    'calculate-speed-col'
  ]

// TODO: create a router constructor
  public constructor(private httpClient: HttpClient){
    this.getSportActivities()
  }



  getSportActivities(): void {
    this.httpClient.get<SportActivity[]>("http://localhost:8080/activity")
      .subscribe({
        next: value => {
          console.log(value)

          this.sportActivitiesList = value
        }
        ,
        error: err => {
          console.log("Error:" + err)
        }

      })


  }

  deleteSportActivity(idToDelete: number): void {
    this.httpClient.delete("http://localhost:8080/activity",
      {
        params: {
          id: idToDelete
        }
      })
      .subscribe({
        next: value => {
          this.getSportActivities()
        },
        error: err => {
          this.getSportActivities()
          console.log("Error:" + err)
        }
      })
  }

  // to develop in future...
  calculateSpeedOfTheActivity(idToCalculate: number): void {
    this.httpClient.get<SpeedActivity[]>("http://localhost:8080/activity/activitySpeed",
      {
        params: {
          sId: idToCalculate
        }
      })
      .subscribe({
        next: value => {
          console.log(value)
          this.speedActivityList = value
        },
        error: err => {
          console.log("Error:" + err)
        }
      })

  }


  update(id: number) {
   // TODO: navigate to update-activity with ID - router constructor needed
  }
}
