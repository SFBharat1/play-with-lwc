import { LightningElement,track } from 'lwc';

export default class CustomEditableDatatable extends LightningElement {
    
    @track saveDraftvalue=[];
    rowOffset = 0;

    fieldsList=[
                {label:'Budget',fieldName:'Budget',type:'currency',editable:'true'},
                {label:'Forcast Budget',fieldName:'ForcastBudget', type:'currency',editable:'true'},
                {label:'Net Budget',fieldName:'NetBudget',type:'currency',editable:'true'},
                {label:'All Budget',fieldName:'AllBudget',type:'currency',editable:'true'},
            ];

    data=[{'id':10,'Budget':100.00, 'ForcastBudget':200.00,'NetBudget':300.00,'AllBudget':400.00},
          {'id':20,'Budget':10.00, 'ForcastBudget':20.00,'NetBudget':30.00,'AllBudget':40.00},
          {'id':30,'Budget':1.00, 'ForcastBudget':2.00,'NetBudget':3.00,'AllBudget':4.00},
          {'id':40,'Budget':150.00, 'ForcastBudget':250.00,'NetBudget':350.00,'AllBudget':450.00}];

    
    handleSave(event){
        console.log('@@@@@ on save called EVENT VALUE 2');
        console.log(event.detail.draftValues);

        // console.log('@@@@ this id for of loop');
        // for(let rec of event.detail.draftValues){
        //     console.log(rec);
        // }

        const newMa0 = event.detail.draftValues.slice().map(value=>{
            
            console.log('#### MAPs VALUE');
            console.log(value);
            console.log(value.id);
                return {"key":String(value.id),"value":value};
            });
        
        // CONVERT MAIN INTO KEY VALUE    
        const datavaluesMap = this.data.map(item => {
            console.log('ALL ids => '+item.id);
            return {"key":String(item.id),"value":item};
        });

        console.log('MAP 1');
        console.log(newMa0);

        console.log('MAP 2');
        console.log(datavaluesMap);

        // // CREATE NEW ARRAY
        // const tempData = this.data.map(item2=>{
        //     //tempKey = item2.id;
        //     console.log('item2 has KEYS => '+item2.id);
        //     if(datavaluesMap.has(String(item2.id))){
        //         console.log(' is changed*** '+item.id);
        //     }
        //     else{
        //         console.log(' No change ***'+item.id);
        //     }
        // });

    }

}