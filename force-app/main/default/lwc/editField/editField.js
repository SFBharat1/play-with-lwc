import { LightningElement, api } from 'lwc';

export default class EditField extends LightningElement {
    @api userFieldName='';
    @api userRecordId='';
}