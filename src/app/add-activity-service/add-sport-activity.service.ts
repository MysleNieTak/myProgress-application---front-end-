import {Injectable} from "@angular/core";
import {SportActivity} from "../model/sportActivity";

@Injectable({
  providedIn: 'root'
})

export class SportActivityService {
  nextId: number = 1;
  sportActivityList: Map<number, SportActivity> = new Map<number, SportActivity>()

  constructor() {
  }

  addSportActivity(sportActivity: SportActivity) {
    sportActivity.id = this.nextId++;
    console.log('Adding a sport activity: ' + sportActivity);
    this.sportActivityList.set(sportActivity.id, sportActivity);
  }

  deleteSportActivityFromService(sportActivityId: number) {
    console.log('Deleting sport activity: ' + sportActivityId);
    this.sportActivityList.delete(sportActivityId);
  }

}
