import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:Address; 
  hobbies:any[]; //Array of strings
  posts:Post; 
  isEdit:boolean;

  constructor(private dataService:DataService) { 
    console.log('construction ran...');
  }

  ngOnInit() {
    console.log("ngOnInit ran...");
    this.name = 'John Doe';
    this.age = 26;
    this.email = "ciao@email.it"; 
    this.address = {
      street: "Via San Francesco D'Assisi, 10",
      city: "Torino",
      state: "Italia"
    }; 
    this.hobbies = ["Write code", "Watch movies", "Listen to music", 1394]; 
    this.isEdit = false; 

    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts; 
    });
  }

  onClick(){
    console.log("Click!!");
    this.name = "Jack"; 
    this.age = 18;
    this.hobbies.push("Rock");
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false
  }

  deleteHobby(hobby){
    console.log(hobby)
    for (let i = 0; i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit; 
  }

}

interface Address{
    street:string, 
    city:string,
    state:string
}

interface Post{
  id : number, 
  title: string,
  body: string, 
  userId: number
}