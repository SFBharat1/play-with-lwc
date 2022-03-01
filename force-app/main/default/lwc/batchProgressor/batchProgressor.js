import { LightningElement, wire } from 'lwc';
import runBatch from '@salesforce/apex/batchProgressController.callBatch';
import checkBatchStatus from '@salesforce/apex/batchProgressController.checkStatus';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import { CloseActionScreenEvent } from 'lightning/actions';

export default class BatchProgressor extends LightningElement {

    progress = 0;
    batchId='';

   
    // handle run batch
    handleBatchExecution(){
        console.log('###@ js calling batch apex');
        // call apex
        runBatch().then(result=>{
            console.log('#### batch executed ');
            console.log('Batch ID => '+result);
            this.batchId = result;

            this.dispatchEvent(new ShowToastEvent({
                title:'Success',
                message:'Batch Executing obId : '+this.batchId,
                mode:'dismissible',
                variant:'Success'
            }));

            // CHECK STATUS
            progressChecker = setInterval(function(){
                checkBatchStatus({jobId:this.batchId}).then(progRes => {
                    this.progress = progRes;
                    console.log('---------- PROGRESS=> '+this.progress);
                    if(this.progress==100){
                        clearInterval(this.progressChecker);
                    }
                }).catch(progErr=>{
                    this.progress = 0;

                    this.dispatchEvent(new ShowToastEventEvent({
                        title:'Error',
                        message:'ERROR: Progress can not be tracked',
                        mode:'dismissible',
                        variant:'Error'
                    }));

                    clearInterval(this.progressChecker);
                });
            }, 1000);
        }).catch(err=>{
            this.dispatchEvent(new ShowToastEvent({
                title:'Error',
                message:'ERROR: Batch unable to execute!',
                mode: dismissible,
                variant:'Error'
            }));
            console.log('###### EXCEPTION on batch');
        });
    }

    // handle close
    handleClose(){
        console.log('###### Closed call ');
        this.dispatchEvent(new CloseActionScreenEvent());
    }
}