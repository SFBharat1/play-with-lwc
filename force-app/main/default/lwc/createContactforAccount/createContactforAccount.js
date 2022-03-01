import { LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';


export default class CreateContactforAccount extends LightningElement {
    
    contact_Id='';

    //CREATE CONTACT FOR ACCOUNT
    handleCreate(){
        try{
            var currentDate = new Date();
            var today = ''+currentDate.getDate()+'/'+currentDate.getMonth()+'/'+currentDate.getFullYear()+' @ '+currentDate.getHours()+':'+currentDate.getMinutes()+':'+currentDate.getSeconds();
            console.log('TODAY => '+today);
            const fields={'LastName':'LWC '+today,'Email':'LWC@gmail.com'};
            /*fields['LastName']='LWC '+today;
            fields['Email']='LWC@gmail.com';*/
            const parameters ={apiName:'Contact',fields};
            console.log('@@@@@@ PARAM ');
            console.log(parameters);

            createRecord(parameters).then((con)=>{
                console.log('@@@@@@@@@@ SUCCESS ');
                console.log(''+con);

                this.contact_Id = con.id;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title:'Success',
                        message:'Contact created',
                        variant:'success'
                    })
                );
            }).catch((err)=>{
                console.log('@@@@@@@@@@ ERROR ');
                console.log(''+err);

                this.contact_Id ='ERROR';
                this.dispatchEvent(
                    new ShowToastEvent({
                        title:'Error',
                        message:'Contact error',
                        variant:'error'
                    })
                );
            });
        }
        catch(ex){
            console.log('@@@@@@ EXCEPTION');
            const myJSON = JSON.stringify(ex);
            console.log(myJSON);
           
        }
    }
}