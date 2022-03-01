import { LightningElement, wire, api } from 'lwc';
import getAllAttachments from '@salesforce/apex/documentController.getAttachments';
import {NavigationMixin  } from 'lightning/navigation';
// import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class Displayfiles extends NavigationMixin (LightningElement) {

    @api recordId;
    attachmentList = [];

    @wire(getAllAttachments,{recordId:'$recordId'})
    getAttachfiles({error, data}){
        if(data){
            console.log('SUCCESS CALL');
            console.log(data);
            // this.dispatchEvent(new ShowToastEvent({
            //     title:"Server success",
            //     message: "server successful request",
            //     variant:"Success"
            // }));
           // this.attachmentList = data;
           console.log('@@@@ ITEM LIST');
           this.attachmentList = data.map((item)=>{
                console.log(item);
                return {...item,url:`/sfc/servlet.shepherd/document/download/${item.ContentDocumentId}`}
            });
            console.log('NEW LIST @@@@');
            console.log(this.attachmentList);

        }
        if(error){
            console.log('ERROR CALL');
            console.log(error);
            // this.dispatchEvent(new ShowToastEvent({
            //     title:"Error",
            //     message:"Server call fail",
            //     variant:"Error"
            // }));


        }
    }

    handlePreview(event){
        console.log('####### PREVIEW CLICKED '+event.target.dataset.id);
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes: {
                pageName:'filePreview'
            },
            state : {
                selectedRecordId : event.target.dataset.id
            }
        });
    }
}