import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {MyContact} from 'src/model/myContact';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private http:HttpClient ) { }     //dependancy injection of httpclient 

  baseUrl:string = 'http://localhost:3000/contacts'

  //function- get all contacts
  getAllContacts():Observable<MyContact>{
    return this.http.get(this.baseUrl);
  }

  //api  call to fetch particular contact
  viewContact(contactId:any){                           //passed parameter contact id
    //http://localhost:4200/contact/view/2               to get this link we use below syntax 
    return this.http.get(`${this.baseUrl}/${contactId}`)
  }

  
  //api call  for fetch group name
  getGroupName(groupId:any){
    return this.http.get(`http://localhost:3000/group/${groupId}`)
  }

  //fn to fetch all groups from http://localhost:3000/group
    getAllGroups(){
      return this.http.get('http://localhost:3000/group')
    }

    //fn for adding new contact to server
    addContact(contactBody:any){
      return this.http.post(this.baseUrl,contactBody)   //defined contactBody-'cause that has to be passed to baseUrl
      
    }
    
    //fn to delete a contact
    deleteContact(contactId:any){
      return this.http.delete(`${this.baseUrl}/${contactId}`)
    }

    //update button to update conatact details
    updateContact(contactId:any,contactBody:any){
      return this.http.put(`${this.baseUrl}/${contactId}`,contactBody)
}
}
