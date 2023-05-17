import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import {MyContact} from 'src/model/myContact'
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit{
  // contactId:any
  // contactName:string=''

  contact:MyContact={}
  allGroups:any[]=[];
  
  constructor(private api:ApiService, private route:Router ){ }

  ngOnInit(): void {
    this.api.getAllGroups().subscribe((data:any)=>{
      console.log(data)  //array(3) of group
      this.allGroups=data;
    })
  }

  //add new contact
  addContact(){
    this.api.addContact(this.contact).subscribe((data:any)=>{
      this.route.navigateByUrl('') //render to admin page
    })
  }

}
