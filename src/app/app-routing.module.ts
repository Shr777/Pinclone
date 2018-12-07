import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule,Routes} from '@angular/router';
import{PinsComponent} from './pins/pins.component';
import{BoardsComponent} from './boards/boards.component'
import{BoarditemComponent} from './boarditem/boarditem.component'


const routes:Routes=[{path:'',
redirectTo:'/Pins',pathMatch:'full'},
{path:'Pins',
component:PinsComponent},
{path:'boards',
component:BoardsComponent},
{path:'boards/:id',
component:BoarditemComponent}];


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
