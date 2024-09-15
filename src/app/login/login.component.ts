import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  showPassword:boolean = false
  sectionNumber: number = 0
  createAccount: boolean = false
  loginOption: any = [
    {
      img: "/assets/image/Login/Facebook.png",
      text: "Facebook"
    },
    {
      img: "/assets/image/Login/Gmail.png",
      text: "Gmail"
    },
    {
      img: "/assets/image/Login/Apple.png",
      text: "Apple"
    }
  ]

  ChangeVisibleOfCreateAccount(){
    this.createAccount= !this.createAccount
  }
  ChangeSectionNumber(number:number){
    console.log(number);
    
    this.sectionNumber= number
  }
  ChangeShowPassword(){
    this.showPassword= !this.showPassword

  }
}
