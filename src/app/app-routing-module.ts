import {RouterModule, Routes} from "@angular/router";
import {SportActivityListComponent} from "./sport-activity-list/sport-activity-list.component";
import {AddActivityComponent} from "./add-activity/add-activity.component";
import {NgModule} from "@angular/core";
import {UpdateActivityComponent} from "./update-activity/update-activity.component";


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: 'home', component: SportActivityListComponent},
  { path: 'add-activity', component: AddActivityComponent},
  { path: 'update-activity/:sportActivityId', component: UpdateActivityComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
