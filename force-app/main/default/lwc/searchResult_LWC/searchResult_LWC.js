import { LightningElement,api,wire } from 'lwc';
import LwcControllerJS from '@salesforce/apex/ApexController.allAccount';

export default class SearchResult_LWC extends LightningElement {

    @api resultList;

    @wire (LwcControllerJS,{name: '$resultList'})
    resultAccounts;

    alertParentEve(){
        console.log('THIE IS GOOD****');
    }
}