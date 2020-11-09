import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';

//decorator
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heros =[
    {
      id: 1,
      name: 'Ben10',
      image: '',
      gender: 'male',
      display: true
    },
    {
      id: 2,
      name: 'batman',
      image:'',
      gender: 'male',
      display: true

    },
    {
      id: 3,
      name: 'wolverine',
      image: '',
      gender: 'male',
      display: true

    },
    {
      id: 4,
      name: 'wonder women',
      image: '',
      gender: 'female',
      display: true
    }
  ]
  heroItem = {
    id: 0,
    name: "",
    gender: "male",
    image: "",
    display: true
  }
  constructor() { }

  ngOnInit(): void {
  }
  saveHero(){
    // kiểm tra nếu id của heroitem =0 => tạo mới
      // tìm id lớn nhất đang có trong danh sách => lấy ra id mới = lớn nhất + 1
      if(this.heroItem.id == 0){
        let maxId = 0;
        this.heros.forEach( h =>{
          if(h.id > maxId){
            maxId = h.id
          }
        })
        this.heroItem.id = maxId + 1;
        //lưu thông tin heroitem vào trong mảng herro
        this.heros.push({...this.heroItem});
      }
      else {
        // tìm ra phần phần tử có id = item đang sửa => index của nó trong mảng
        // sau đó thay thế nó bằng giá trị của heroItem
        let indexHero = -1;
        this.heros.forEach((item, index) => {
          if(item.id == this.heroItem.id){
            indexHero = index
          }
        })
  
        this.heros[indexHero] = {...this.heroItem};
      }
    // xóa trắng dữ liệu của biến heroitem
    this.heroItem ={
      id: 0,
      name: "",
      gender: "male",
      image: "",
      display: true
    }
  }

  editHero(hero){
    this.heroItem = {...hero}
  }

  sortByGender(event){
    if(event.target.value == 1){
      this.heros.map(hero=> {
        hero.display = true;
        return hero;
      })
    }
    else if (event.target.value == 2){
        this.heros.map(hero=>{
          if(hero.gender == 'female'){
            hero.display = false;
          }
          else{
            hero.display = true;
          }
          return hero;
        })
      }
        
     else{
        this.heros.map(hero=>{
          if(hero.gender == 'female'){
            hero.display = true;
          }
          else{
            hero.display = false;
          }
          return hero;
        })

    }
    console.log(this.heros);
  }
}
