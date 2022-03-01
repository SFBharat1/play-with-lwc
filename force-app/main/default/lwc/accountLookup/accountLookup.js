import { LightningElement,wire } from 'lwc';
import allAccounts from '@salesforce/apex/ApexController.allAccount'

const DELAY = 300;

export default class AccountLookup extends LightningElement {
    searchKey = '';

    @wire(allAccounts, { searchKey: '$searchKey' })
    accounts;

    handleKeyChange(event) {
        // Debouncing this method: Do not update the reactive property as long as this function is
        // being called within a delay of DELAY. This is to avoid a very large number of Apex method calls.
        window.clearTimeout(this.delayTimeout);
        const searchKey = event.target.value;
        this.delayTimeout = setTimeout(() => {
            this.searchKey = searchKey;
        }, DELAY);
    }

    methodClick(event){
        console.log('*******************');
        console.log(event.srcElement.name);
        console.log(event.traget.name);
    }
}