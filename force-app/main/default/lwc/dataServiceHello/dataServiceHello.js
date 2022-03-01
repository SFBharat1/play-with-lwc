import { LightningElement } from 'lwc';
import CONTACT_NAME from '@salesforce/schema/Contact.Name';
import APPOINTMENT_FIELD from '@salesforce/schema/Contact.Last_Appointment_date_del__c';

export default class DataServiceHello extends LightningElement {
    fields=['AccountId','Name','Email',APPOINTMENT_FIELD];
}