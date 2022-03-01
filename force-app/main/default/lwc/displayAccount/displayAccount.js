import { LightningElement, wire,track } from 'lwc';
import findTenAccount from '@salesforce/apex/AccountController.getAccountList';
import findOneAccount from '@salesforce/apex/AccountController.getSingleAccount';
import findTenContacts from '@salesforce/apex/AccountController.get10Contacts';
export default class DisplayAccount extends LightningElement {

    @track contacts=[];

    //WIRE CALL WITH PROPERTY
    @wire(findTenAccount) accounts;

    @wire(findOneAccount) account;

    // WIRE WITH PARAMETER
    /*@wire(findTenContacts,{accId:'0012w00000YjSZNAA3'}) contactList({data,error}){
        console.log('CONTACT WIRE - THIS IS CALLED');
        try{
            if(data){
                //this.template.querySelector('.successCls').textContent='Contact fatch successfully!';
                //this.template.querySelector(".successCls").style.display="block";
                for(let i=0;i<data.length;i++){
                    console.log('LastName=> ');
                    console.log(data[i].LastName);
                    var contact ={'LastName':data[i].LastName+' LWC','Email':data[i].Email,'Id':data[i].Id};
                    this.contacts.push(contact);
                    //data[i].Lastname+=' LWC';
                }
                console.log('OLD LIST=> ');
                console.log(data);
                //this.contacts=data;
                console.log('new LIST =>');
                console.log(this.contacts);
            }
            else{
                this.contacts=null;
                //this.template.querySelector(".errCls").style.display="block";
            }
        }
        catch(ex){
            console.log('EXCEPTION => '+ex.message);
        }
    };
    */

    
    // CALL APEX METHOD WITHOUT WIRE
    handleJsButton(){
        console.log('Method called');
        findTenContacts({accId:'0012w00000YjSZNAA3'}).then((data)=>{
            this.contacts=[];
            for(let i=0;i<data.length;i++){
                console.log('LastName=> ');
                console.log(data[i].LastName);
                var contact ={'LastName':data[i].LastName+' LWC','Email':data[i].Email,'Id':data[i].Id};
                this.contacts.push(contact);
                //data[i].Lastname+=' LWC';
            }
            console.log('OLD LIST=> ');
            console.log(data);
            //this.contacts=data;
            console.log('new LIST =>');
            console.log(this.contacts);
        }).catch((err)=>{
            console.log('Error Message');
            console.log(err);
            this.contacts=[];
        });
    }

    // APEX METHOD WITH PARAMETER

}