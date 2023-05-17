import { Component ,OnInit} from '@angular/core';
import { MyContact } from 'src/model/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {
  //display date & time
    loginDate:any;
    // heading='Contact Details'

    //searching
    searchKey:string='';



  //allcontacts:any
  //string interpolation-        explained---->
  allContacts : MyContact[]=[]                    //here we gives the type of data to allContacts ,ie its like model Mycontact is an [array] =[]

  constructor(private api:ApiService){      //injection

       this.loginDate=new(Date);     
                             //assigning date 

  }   

  ngOnInit(): void{
    this.api.getAllContacts().subscribe((data:any)=>{         //also we can give .subscribe((Mycontacts)
      console.log(data); //array of data ,array(4) all contacts details
      this.allContacts=data
    
    })
  }

  getAllContacts(){
    this.api.getAllContacts().subscribe((data:any)=>{         
      this.allContacts=data
  })}

  // nameChange(){
  //   alert('value changed')
  // }

    search(event:any){
      // console.log(event.target.value);
      this.searchKey=event.target.value;

    }

    //delete fn
    deleteContact(contactId:any){
      this.api.deleteContact(contactId).subscribe((data:any)=>{
        alert('contact deleted')
        this.getAllContacts()
      })
    }
}
