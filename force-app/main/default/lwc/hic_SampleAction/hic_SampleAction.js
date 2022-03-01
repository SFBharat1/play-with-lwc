import { LightningElement, api } from 'lwc';

export default class Hic_SampleAction extends LightningElement {
    // INVOKE MTHOD: called when action is called
    @api invoke() {
       console.log('@@@ ACTION CALLED @@@');
    }
}