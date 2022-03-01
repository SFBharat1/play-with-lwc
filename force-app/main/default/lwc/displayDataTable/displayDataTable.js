import { LightningElement} from 'lwc';
import getAllContact from '@salesforce/apex/AccountController.fatchAllContach';

export default class DisplayDataTable extends LightningElement {
    
    contactList=[];
    columns = [
        {label:"Contact Id", fieldName:"Id"},
        {label:"Name", fieldName:"Name"},
        {label:"Phone", fieldName:"Phone", type:"phone"},
        {label:"Email", fieldname:"Email", type:"email"},
        {label:"Title", fieldName:"Title"}
    ]
   check =false;
   datatablecheck = false;


    // CALL APEX
    handleClick(){
        getAllContact().then((result)=>{
            console.log('@@@ RESULT @@@');
            console.log(result);
            //result.forEach(handleForEach);
            let contactList2 =[]
            for(let recd of result){
                console.log(`Contact Name ---> ${recd.Name}`);
                var tempRec ={Id: recd.Id ,Name:recd.Name+' Prospect' , Phone: recd.Phone , Email: recd.Email,Title:"Salesforce developer"};
                contactList2.push(tempRec);
                //console.log('New Name --> '+recd.Name);
            }
            if(contactList2)
                this.contactList =[...contactList2]
            
        }).catch((error)=>{
            console.log('@@@ ERROR @@@');
            console.log(error);
        });
    }

    handleChange(event){
        console.log('TOGGLE EVENT ');
        console.log(event.target.checked);
        this.datatablecheck = event.target.checked;
    }
    // HANDLE FOR EACH
    // function handleForEach(item){
    //     console.log('######## IN LOOP ');
    //     console.log(item);
    // }
}