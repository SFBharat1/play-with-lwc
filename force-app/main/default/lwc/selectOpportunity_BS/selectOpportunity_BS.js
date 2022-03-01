import { LightningElement, wire } from 'lwc';
import getSearchResult from '@salesforce/apex/searchOpp_Controller.getAllOpportunity';

export default class SelectOpportunity_BS extends LightningElement {
    selectOpportunity =true;
    opportunityLis=[];
    searchResultopportunityList=[];
    searchKey='';

    oppColumns = [
        {label:'Opportunity Name', fieldName:'Name'},
        {label:'Opportunity Id', fieldName:'Id'},
        {label:'Account Name', fieldName:'AccountName'}
    ];

    handleSearchChange(event){
        console.log('### CHANGE EVENT ');
        this.searchResultopportunityList=[];
        this.opportunityLis=[];

        this.searchKey = event.target.value;
        console.log(event.target.value);
        console.log(this.searchKey);

        getSearchResult({searchString:this.searchKey}).then((result)=>{
            console.log('SUCCESS RESULT FROM APEX');
            
            // ITEREATE THROUGH RESULT
            for(let opRec of result){
                console.log('@@@@ inside loop');
                console.log(opRec);
                let accName = opRec.AccountId!=null?opRec.Account.Name:'';
                console.log('####accName');
                console.log(accName);
                let newRecd = {...opRec,"AccountName":accName};
                this.opportunityLis.push(newRecd);
            }
            console.log('RESULT LIST ');
            console.log(this.opportunityLis);

            this.searchResultopportunityList =(this.opportunityLis.length>0)? this.opportunityLis:null;
        }).catch((error)=>{
            console.log('ERROR RESULT FORM APEX');
            console.log(error);
            this.searchResultopportunityList = [];
            this.opportunityLis=[];
        });

    }
    
}