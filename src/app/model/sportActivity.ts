import {formatNumber} from "@angular/common";

export enum SportActivityType {
  SWIM = 'Swim',
  RUN = 'Run',
  WALK = 'Walk',
  HIKE = 'Hike',
  DANCE = 'Dance'
}

export type SportActivity = {
  id: number
  title: string
  date: Date
  distanceInMetres: number
  timeInMinutes: number
  userName: string
  activityType: string
  howDoYouFeel: string

}


export type CreateSportActivityRequest = {
  titleDTO: string
  dateDTO: Date
  distanceInMetresDTO: number
  timeInMinutesDTO: number
  userNameDTO: string
  activityTypeDTO: string
  howDoYouFeelDTO: string
}

export type UpdateSportActivityRequest = {
  titleDTO: string
  distanceInMetresDTO: number
  timeInMinutesDTO: number
  activityTypeDTO: string

  howDoYouFeelDTO: string

}

export type UpdateSportActivityResponse = {
  titleDTO: string
  dateDTO: Date
  distanceInMetresDTO: number
  timeInMinutesDTO: number
  userNameDTO: string
  activityTypeDTO: string
  howDoYouFeelDTO: string
}

