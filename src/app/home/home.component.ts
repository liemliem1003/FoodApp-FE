import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  visible:boolean = true;

  navigationImg:any =[
    {
      img:"/assets/image/Home/Image1.png",
      text:"Recyle food"
    },
    {
      img:"/assets/image/Home/Image2.png",
      text:"Sit back, dinner is on the way"
    },
    {
      img:"/assets/image/Home/Image3.png",
      text:"Choose the food you love"
    },
    {
      img:"/assets/image/Home/Image4.png",
      text:"Eat from the best restaurants"
    },
  ]
  selectedPage:number =0;

  ngOnInit():void{
    setTimeout(() => {
      this.visible = !this.visible
    }, 4000);
  }



  ChangePage(number:any){
    this.selectedPage = number
  }
  
}
