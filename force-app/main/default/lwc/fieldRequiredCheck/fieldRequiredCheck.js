import { LightningElement, track } from 'lwc';
import {loadStyle} from 'lightning/platformResourceLoader';
import readioStyle from '@salesforce/resourceUrl/radioGroupStyle';

export default class FieldRequiredCheck extends LightningElement {

    colorList = ['red','orange','yellow','goldan','lightGreen','lightBlue','white','purple'];
    tempcolor = 'white';    
    

    connectedCallback(){
        console.log('###@@ callback');
        console.log('####$$ tempColor=> '+this.tempcolor);
        console.log('####$$ NO tempColor');
        loadStyle(this,readioStyle);

        // setInterval(()=>{
        //     console.log('##@@@ setInterval ');
        //     const randomIndex = Math.floor(Math.randon()*this.colorList.length);
        //     this.tempcolor = this.colorList[randomIndex];
        // },2000);

    }

    usname='';
    password='';
    email='';
    userCountry;
    userCertificatioin;
    userGender;
    userDev;
    userAdmin;
    selectedService;
    

    genderOption = [
        {label:"Male", value:"Male"},
        {label:"Female", value:"Female"}
    ];

    Services= [
        { label: 'Amin', value: 'Admin' },
        { label: 'Developer', value: 'Developer' },
        { label: 'Consultant', value: 'Consultant' },
        { label: 'Architect', value: 'Architect' }
    ];

    // HANDLE SAVE
    handleSave(event){
        console.log('@@@@@@@@ SAVE CALLED ');
        const emailFieldRef = this.template.querySelector('.emailCls');
        console.log('!!!!!!!!!!!! ^^^^');
        const isvalid = emailFieldRef.reportValidity();
        console.log('####@@ email report valid=> '+isvalid);
        console.log(' FORCE ERROR MESSAGE *8*');
        emailFieldRef.validity.valid =false;

        emailFieldRef.setValidity =false;
        emailFieldRef

        
        // const isInputsCorrect = [...this.template.querySelectorAll('lightning-input')]
        //     .reduce((previousItemResult, currentInputField) => {
        //         currentInputField.reportValidity();
        //         console.log('@@@@@  FIELD CHECK1 => '+currentInputField.name);
        //         console.log('@@@@# previousItemResult ');
        //         console.log(previousItemResult);
        //         return previousItemResult && currentInputField.checkValidity();
        //     }, true);//true is default value for first previousItemResult
        // if (isInputsCorrect) {
        //  //perform success logic
        //     console.log('@@@@@ ALL FIELD SET ');
        // }

    }
    
    handleUsnameChange(event){
        console.log('@@@@@@@@ usrname change => '+event.detail.value);
        this.usname= event.detail.value;
    }

    handlePasswdChange(event){
        console.log('@@@@@@@@ password ');
        this.password= event.detail.value;
    }

    handleEmailChange(event){
        console.log('@@@@@@@@ email ');
        this.email= event.detail.value;
    }

    handleuserCountryChange(event){
        console.log('@@@@@@@@ Country ');
        this.userCountry= event.detail.value;
    }
    handleCertChange(event){
        console.log('@@@@@@@@ Cert ');
        this.userCertificatioin= event.detail.value;
    }
    handleuserGenderChange(event){
        console.log('@@@@@@@@ Gender ');
        this.userGender= event.detail.value;
    }
    handleDevChange(event){
        console.log('@@@@@@@@ dev ');
        this.userDev= event.detail.value;
    }
    handleAdminChange(event){
        console.log('@@@@@@@@ Admin ');
        this.userAdmin= event.detail.value;
    }

    get needSpinner(){
        return (this.userCountry!='' && this.userCountry!=undefined)
    }

    // toggel Save
    get showSave(){
        return !(this.usname!='' && this.usname!=undefined && this.email!='' && this.email!=undefined && this.password!='' && this.password!=undefined);
    }

    get dynamicColer(){
        return  `background-color: ${this.tempcolor};`;
    }
}