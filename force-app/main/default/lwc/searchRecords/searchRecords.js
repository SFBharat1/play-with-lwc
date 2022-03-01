import { LightningElement,api, track } from 'lwc';

export default class SearchRecords extends LightningElement {
    @api recordId;
    @api invoke(){
        // console.log('---- LWC METHOD INVOKED -----');
        console.log('@@@@@ => '+this.recordId);
    }
}