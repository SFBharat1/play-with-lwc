import { LightningElement } from 'lwc';
import serverGetAllOpportunity from '@salesforce/apex/OpportunityServer.getAllOpportunityRecords';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class OpportunityDataTable extends LightningElement {
    
    //toggel
    showDatatable = false;
    addProductCheck = true;
    opportunityList = [];
    styleOpportunityList= [];

    // columns to print on datatable
    columns = [
        {label:"Name", fieldName:"Name"},
        {label:"Current Stage", fieldName:"StageName"},
        {label:"Amount", fieldName:"Amount", type:"currency",cellAttributes:{iconName:{fieldName:"amountIcon"},iconPosition:'right',class:{fieldName:"amountColor"}},typeAttributes:{currencyCode:'INR',step:'0.001' }},
        {label:"Close Date", fieldName:"CloseDate", type:"date"}
    ]

    // HANDLE TOGGER EVENT
    handletoggel(event){
        this.addProductCheck=true;
        console.log('TOGGEL IS PRESSED');
        this.showDatatable = event.target.checked;
        if(event.target.checked){
            console.log('true****');
            this.getOpportunityRecords();
        }
        else
        console.log('False****');
    }

    //CALL APEX TO GET ACCOUNT RECORDS
    getOpportunityRecords(){
        console.log('CALLING APEX');
        serverGetAllOpportunity().then((apexResult)=>{

            console.log('Success APEX');
            console.log(apexResult);
            // this.opportunityList = [...apexResult]
            for(let recd of apexResult){
                console.log('@@@@ STYLE Start');
                let amountColor  = recd.Amount>100000?"slds-text-color_success":"slds-text-color_error";
                let amountIcon = recd.Amount>100000?"utility:up":"utility:down";
                let newRec = {...recd,"amountColor":amountColor,"amountIcon":amountIcon}
                this.styleOpportunityList.push(newRec);
            }
            console.log('STYLE DONE');
            console.log(this.styleOpportunityList);
            this.opportunityList = this.styleOpportunityList;
            //console.log(opportunityList);
            this.dispatchEvent(new ShowToastEvent({
                message:'Success apex',
                title:'Success',
                variant:'Success'
            }))
        }).catch((err)=>{
            console.log('Error APEX');
            console.log(err);
            this.dispatchEvent(new ShowToastEvent({
                message:'Error apex',
                title:'Error'
            }));
        });
    }

    // NO ROW SELECT
    getSelectedName(event){
        console.log('@@@ ROW SELECTED ');
        console.log(event.detail.selectedRows.length);
            if(event.detail.selectedRows.length===0)
                this.addProductCheck=true;
            else{
                this.addProductCheck=false;
                console.log(event.detail.selectedRows[0]);
            }
                
        
    }
}