import { LightningElement, wire } from 'lwc';
import showMatching from '@salesforce/apex/AccountController.showMatching';


export default class CustomLookupTypes extends LightningElement {
    serchKey='';
    finalUserInput ='';
    isNotSelected = true;
    item=[];

// WIRE APEX METHOD
@wire(showMatching,{userKey:'$serchKey'})
AccountsList;

handleAccountSelection(event){
    console.log("the selected record id is"+event.detail);
}

//HANDLE KEY PRESS
handleKeyPress(event){
    console.log('@@@@@@@@ is change '+event.target.value);
    this.serchKey = event.target.value;
}

generateEvent(event){
    console.log('###### final called');
    console.log(event.target.dataset.accname);
    this.finalUserInput=event.target.dataset.accname;
    this.isNotSelected = false;
}

handleRemove(event){
    this.finalUserInput='';
    this.isNotSelected = true;
    this.serchKey='';
}

}