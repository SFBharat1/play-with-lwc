import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import input from '@salesforce/resourceUrl/input';

export default class Bsc_LoginPage extends LightningElement {

    connectedCallback(){    
        console.log('CONNECTED CALLBACK IS EXECUTED');
        loadStyle(this,input).then(()=>{
            console.log('css loaded successfully');
        }).catch(error=>{
            console.log('**** error encountered ');
            console.error(error);
        });
    }
}