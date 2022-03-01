import { LightningElement, wire, api, track } from 'lwc';
import getOpportunityLine from '@salesforce/apex/OpportunityServer.getLineRecords';

export default class RelatedListClone extends LightningElement {
    @api recordId;
    lineList = [];
    toggerlValue = false;
    linecolumns = [
        {label:"Product Name", fieldName:"productName"},
        {label:"List Price", fieldName:"ListPrice", type:"currency", typeAttributes:{currencyCode:"GBP"},cellAttributes:{class:{fieldName:"currencyColor"}}},
        {label:"Unit Price", fieldName:"UnitPrice", type:"currency",typeAttributes:{countryCode:"USD"}},
    ]

    @wire(getOpportunityLine,{opportunityId:'$recordId'})
    getOpportunityProducts({data,error}){
        if(data){
            let currencyColor ='';
            let productName=''
            console.log('@@@@ SUCCESS DATE');
            console.log(data);
            this.lineList = data.map((item)=>{
                currencyColor = item.UnitPrice > 5000?"slds-text-color_success":"slds-text-color_error";
                productName = item.Product2.Name;
                console.log('####### PRODUCT NAME=>'+productName);
                return {...item,"currencyColor":currencyColor,'productName':productName};
            })
            console.log('@@@@ NEW DATA');
            console.log(this.lineList);
        }
        else
            console.log( '@@@ ERROR');
    }

    // HANDLE TOGGEL
    handletoggel(event){
        this.toggerlValue = event.target.checked;
    }


    @track isModalOpen = false;
    openModal() {
        // to open modal set isModalOpen tarck value as true
        this.isModalOpen = true;
    }
    closeModal() {
        // to close modal set isModalOpen tarck value as false
        this.isModalOpen = false;
        this.toggerlValue=false;
    }
    submitDetails() {
        // to close modal set isModalOpen tarck value as false
        //Add your code to call apex method or do some processing
        this.isModalOpen = false;
        this.toggerlValue=false;
    }

    closeList(){
        this.toggerlValue=false;
    }

}