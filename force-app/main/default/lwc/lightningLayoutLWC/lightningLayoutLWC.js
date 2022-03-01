import { LightningElement } from 'lwc';

export default class LightningLayoutLWC extends LightningElement {
    name = 'Bhagwan Singh Chuphal';
    title ='Salesforce Developer';
    experience = '2 year';
    email="singh22bhagwan@gmail.com";
    phone = '8826098221';
    image = 'https://assets.entrepreneur.com/content/3x2/2000/20180419202754-GettyImages-134234873-crop.jpeg';
    message = 'Headding'

    handlerRefresh(){
        /* eslint-disable no-console */
        alert('called es lint');
        this.message = 'Headding';
    }

    displayMessage(event){
        this.message = event.target.value;
    }
}