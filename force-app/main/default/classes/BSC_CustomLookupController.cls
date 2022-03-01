public with sharing class BSC_CustomLookupController {
    
    @AuraEnabled(cacheable = True)
    public static list<Contact> serarchResult(String userInput) {
        string tempValue = userInput+'%';
        System.debug('#### called the server ');
        list<Contact> resultContact = [SELECT id,Name from Contact where Name Like:tempValue limit 7];
        return resultContact;
    }
}