import { LightningElement, wire } from 'lwc';
import getMatchList from '@salesforce/apex/BSC_CustomLookupController.serarchResult';

export default class Bsc_CustomLookup extends LightningElement {

    searchKey = '';
    contacts;
    isSelected = false;

    handleChange(event) {
        this.searchKey = event.target.value;
        if(event.target.value==''){
            this.contacts = undefined;
            return ;
        }
            
        console.log('@@@@ event value '+this.searchKey);
        getMatchList({ userInput: this.searchKey })
            .then((result) => {
                console.log('length => '+result.length);
                if(result.length){
                    this.contacts = result;
                    console.log('ITEM ID ===> ');
                    console.log(result[0].Id);
                }
                else
                this.contacts = undefined;
                // this.error = undefined;
            })
            .catch((error) => {
                // this.error = error;
                this.contacts = undefined;
            });
    }

    handleSelect(event){
        console.log('#### SELECTED => 1 ');
        //console.log(event.target.dataset.id);
        console.log(event.currentTarget.dataset.id); 
        console.log(event.currentTarget.dataset.name);
        this.isSelected = true;
        this.SelectedNameId = event.currentTarget.dataset.Id;
        this.selectedName = event.currentTarget.dataset.Name;
        this.searchKey='';
    }
}