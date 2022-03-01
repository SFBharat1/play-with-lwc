/**********************************************************************************
 * DESCRIPTION  :   LWC apex controller
 */
public with sharing class LwcController {
    @AuraEnabled
    public static list<Contact> contactList(Id accId){
        try {
            System.debug('###### LWC CONTROLLER CALLED ######'+accId);
            return [SELECT id,accountId,lastname,firstName,email,phone from contact where accountId=:accId];
        } catch (Exception e) {
            System.debug('EXception ==> '+e.getLineNumber()+' '+e.getMessage()+' '+e.getCause());
            return null;
        }
    }
}