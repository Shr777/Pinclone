import { Component, OnInit,Input } from '@angular/core';
import { Pins } from './pins.model';

@Component({
  selector: 'app-pins',
  templateUrl: './pins.component.html',
  styleUrls: ['./pins.component.css']
 
})
export class PinsComponent implements OnInit {

   
   
  constructor() { }

  ngOnInit() {
   }
  pin:Pins[]=[
    new Pins('Cheesecake','yummy chocolate covered strawberry cheesecake ','recipes','https://www.awayfromthebox.com/wp-content/uploads/2016/11/Cheesecakes-1-C.jpg'),

    new Pins('Cat','A cute cat','animals','https://i.pinimg.com/originals/81/6d/a5/816da533638aee63cfbd315ea24cccbd.jpg'),
    new Pins('Dog',' A cute dog','animals','https://i.pinimg.com/originals/f5/7e/00/f57e00306f3183cc39fa919fec41418b.jpg'),
    
    new Pins('Peppers','Delicious stuffed pepper recipe','recipes','http://del.h-cdn.co/assets/17/31/980x490/landscape-1501884880-delish-sloppy-joe-stuffed-peppers-1.jpg'),
    new Pins('Lion','Wild animal','animals','http://r.ddmcdn.com/w_830/s_f/o_1/cx_98/cy_0/cw_640/ch_360/APL/uploads/2015/07/cecil-AP463227356214-1000x400.jpg'),
    new Pins('Turtle','Green sea turtle','animals','https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Reptiles/A-G/green-sea-turtle-closeup-underwater.adapt.945.1.jpg'),

    new Pins('Pizza',' Chicken Pizza','recipes','https://www.tasteofhome.com/wp-content/uploads/2017/10/Chicken-Pizza_exps30800_FM143298B03_11_8bC_RMS-2-696x696.jpg'),
    new Pins('Elephant','An African bush elephant','animals','https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg'),
    new Pins('Pasta','Sun dried tomato chicken pasta','recipes','https://www.crunchycreamysweet.com/wp-content/uploads/2018/08/sun-dried-tomato-chicken-pasta-5.jpg'),

  ];
 
}