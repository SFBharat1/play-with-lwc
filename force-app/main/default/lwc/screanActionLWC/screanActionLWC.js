import { LightningElement,api,wire } from 'lwc';
import getOpp from '@salesforce/apex/OpportunityServer.getOpportunityList';

export default class ScreanActionLWC extends LightningElement {
    @api recordId;
    opportunityList = [];
    fields=[
            {label:"Deal Id", fieldName:"Id"},
            {label:"Account Name",fieldName:"Account Name"},
            {label:'Opportunity Name',fieldName:'Name'},
            {label:'Amount',fieldName:'Amount', type:'currency',typeAttributes:{currencyCode:"GBP"}}
        ];

    handleNameChange(event){
        console.log('@@@@@ chnage capture==>');
        console.log(event.target.value);
        console.log('current list ==> ');
        console.log(this.opLineitemsList.data)
    }

    @wire(getOpp,{searchString:'empty'})
    opLineitemsList({error,data}){
        if(data){
            console.log('#### DATA ');
            console.log(data);
            var tempName='';
            this.opportunityList = data.map((item)=>{
                tempName = item.Account!=null?item.Account.Name:'';
                return {...item,'Account Name':tempName};
            });
            console.log('NEW LIST==> ');
            console.log(this.opportunityList);
        }
        if(error){
            console.log('NO DATA');
        }
    };

    @api invoke(){
        console.log('@@@@@ => '+this.recordId);
    }
}