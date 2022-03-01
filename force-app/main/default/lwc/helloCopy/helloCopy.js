import { NavigationMixin } from 'lightning/navigation';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJ_DETAILS from '@salesforce/schema/Account';
import ACCOUNT_FIELD_API_NAME from '@salesforce/schema/Account.Name';
import {createRecord} from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';


export default class HelloCopy extends NavigationMixin(LightningElement) {
    greeting="World";
    showvalue =false;
    accountId='';
    accname='';
    
 

    contacts = [
        {
            Id: '003171931112854375',
            Name: 'Amy Taylor',
            email: 'Amy@gmail.com'
        },
        {
            Id: '003192301009134555',
            Name: 'Michael Jones',
            email: 'Michael@gmail.com'
        },
        {
            Id: '003848991274589432',
            Name: 'Jennifer Wu',
            email: 'Jennifer@yahoo.com'
        }
    ];

    // CHANGE greeting WITH TEXT INPUT
    changename(event){
        console.log('@@@@@ CLICK ');
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
        console.log(event.data);  //undefined
        this.greeting=event.target.value;
    }

    //CHECKBOX RENDER OF HIDDEN DIV
    checkboxevent(event){
        console.log('@@@ checkbox checked '+event.target.checked);
            this.showvalue = event.target.checked;
    }

    //HANDLE NAVIGATION  
    handlenavi(){
        this[NavigationMixin.Navigate]({
            type: "standard__component",
            attributes: {
                componentName: "c__navigateToLWC"
            }
        });
    }

    //CREATE NEW ACCOUNT AND DISPLAY ID
    handlenamechange(event){
        console.log('@@@@ name change ');
        this.accountId='';
        this.accname= event.target.value;
    }
    createAccount(){
        console.log('#### CREATE ACCOUNT REQUESTED ');
        console.log(ACCOUNT_FIELD_API_NAME);
        //const field ={ACCOUNT_FIELD_API_NAME.fieldApiName:this.accname};
        console.log('@@@ API Name '+ACCOUNT_FIELD_API_NAME.fieldApiName);
        
        const fields={};
        fields[ACCOUNT_FIELD_API_NAME.fieldApiName]=this.accname;
        const userInputs ={apiName:ACCOUNT_OBJ_DETAILS.objectApiName,fields};
        console.log(userInputs);
        createRecord(userInputs).then((acc)=>{
            this.accountId = acc.id;
            this.dispatchEvent(
                new ShowToastEvent({
                    title:'Success',
                    message:'Account created',
                    variant:'success'
                })
            );
        })
        .catch((errorss)=>{
            this.dispatchEvent(
                new ShowToastEvent({
                    title:'ERROR ENCOUNTERED',
                    variant:'error',
                    message:''+errorss
                })
            );
        });
    }

}