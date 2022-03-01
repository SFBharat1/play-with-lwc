import { LightningElement,api } from 'lwc';

export default class PaginationEvents extends LightningElement {
  @api name='';

   dispatchNext(){
    this.dispatchEvent(new CustomEvent('next',{detail:{'name':'Bhagwan','count':1}}));
   }

   dispatchPrevious(){
       this.dispatchEvent(new CustomEvent('previous'));
   }
}