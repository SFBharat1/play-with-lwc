import { LightningElement } from 'lwc';
import Id from '@salesforce/user/Id'
export default class HeaderBar extends LightningElement {
    name='Bhagwan Singh chuphal';
    email='bhagwan22@gmail.com';
    phone='1234567891';
    userId=Id;
    photoUrl='data:image/jpeg;base64,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';
}