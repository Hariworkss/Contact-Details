import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  contactId:string=''
  contact:any;
  groupId:any;
  groupName:any;
  constructor(private activatedRoute:ActivatedRoute ,private api:ApiService){  }    //injected activatedroute to use 'params' method and //ApiService to access viewContacts() fn from it

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);   //id- -contact id :2
      this.contactId=data.contactId;  //value of that  eg:  2
    
      //api call - to view data of particular contact
      this.api.viewContact(this.contactId).subscribe((data:any)=>{
        console.log(data); //data of particular contact
        this.contact=data;
        this.groupId=data.groupId

        //view grp name...........we 've created a fn in api service to view grp name in api service
        this.api.getGroupName(this.groupId).subscribe((data:any)=>{
          this.groupName=data.name;
        })
      })
    
    })
  }
  //api call - to view the 

}
