import { LightningElement, wire, api } from 'lwc';

export default class BsRelatedTable extends LightningElement {

    columns = [
        {label:"Company Name",fieldName:"Company_Name"},
        {label:"In Price", fieldName:"In_Price", type:"currency", typeAttributes:{currencyCode:"INR", setp:"0.001"}},
        {label:"Out Price", fieldName:"Out_Price", type:"currency", typeAttributes:{currencyCode:'INR',step:'0.001' }},
        {label:"Profit%", fieldName:"Profit", type:"percent",typeAttributes:{step:"0.001",minimumFractionDigits:'2', maximumFractionDigits:'3'}, cellAttributes:{alignment:"center"}}
    ];

    tabledata = [
        {"Company_Name":"TCS","In_Price":100.00,"Out_Price":120.00,"Profit":20},
        {"Company_Name":"Reliance","In_Price":140.00,"Out_Price":120.00,"Profit":40},
        {"Company_Name":"Adani","In_Price":130.00,"Out_Price":120.00,"Profit":30},
        {"Company_Name":"DLF","In_Price":120.00,"Out_Price":120.00,"Profit":0},
        {"Company_Name":"Flipkart","In_Price":110.00,"Out_Price":120.00,"Profit":-10}
    ]
}