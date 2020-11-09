import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skill=[
    {
      id: 1,
      name: 'Tốc biến',
      image: '',
      mana: '0',
      countdown: '123'
    },
    {
      id: 2,
      name: 'Dịch chuyển',
      image: '',
      mana: '0',
      countdown: '122'
    },
    {
      id: 3,
      name: 'Chiêu cuối',
      image: '',
      mana: '100',
      countdown: '155'
    },

  ]

  skillItem={
    id: 0,
    name: '',
    image: '',
    mana: '',
    countdown: ''
  }

  saveSkill(){
    if(this.skillItem.id == 0){
      let maxId=0;
      this.skill.forEach( sk =>{
        if(sk.id>maxId){
          maxId = sk.id
        }
      })
      this.skillItem.id= maxId+1
      // lưu thông tin
      var anh = this.skill.push({...this.skillItem});
    }
    else {
      // tìm ra phần phần tử có id = item đang sửa => index của nó trong mảng
      // sau đó thay thế nó bằng giá trị của heroItem
      let indexSkill = -1;
      this.skill.forEach((item, index) => {
        if(item.id == this.skillItem.id){
          indexSkill = index
        }
      })

      this.skill[indexSkill] = {...this.skillItem};
    }
    //xóa trắng giữ liệu ở input
    this.skillItem={
      id: 0,
      name: '',
      image: '',
      mana: '',
      countdown: ''
    }
  }

  editSkill(sk){
    this.skillItem = {...sk}
    console.log(this.skillItem)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
