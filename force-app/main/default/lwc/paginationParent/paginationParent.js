import { LightningElement } from 'lwc';

export default class PaginationEvents extends LightningElement {
    pageNumber =0;
    parentName = 'This is parent comp';

    handlenameChange(event){
        this.parentName = event.target.value;
    }
    increase(event){
        //this.pageNumber+=1;
        var arg = event.detail;
        this.parentName = arg.name;
        this.pageNumber+=1;

    }
    decrease(event){
        this.pageNumber-=1;
    }
}