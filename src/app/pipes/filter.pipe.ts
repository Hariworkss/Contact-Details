import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

      //transform output
        //allContacts - array ,searchKey-Hari ,propName -name
  transform(allContacts: any=[], searchKey:string,propName:string): any[] {
    const result:any=[]         //key to be searched   // depended on propname
    if (!allContacts||searchKey==''||propName==''){
      return allContacts
    }

    allContacts.forEach((contact:any)=>{
      if(contact[propName].trim().toLowerCase().includes(searchKey.toLowerCase())){
                      //name Diya M-> diyam.includes(di)               //trim()- to avoid whitespace
                          
        result.push(contact)
      }         
    })


    return result;
  }

}
