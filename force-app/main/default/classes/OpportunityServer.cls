public with sharing class OpportunityServer {
    
    @AuraEnabled(cacheable = True)
    public static list<Opportunity> getAllOpportunityRecords() {
        return [SELECT id, Name, StageName, CloseDate,Amount from Opportunity WITH SECURITY_ENFORCED];
    }

    // GET OPPORTUNITY LINE ITEM
    @AuraEnabled(cacheable = True)
    public static List<OpportunityLineItem> getLineRecords(string opportunityId){
        return [SELECT Id, OpportunityId, Opportunity.Name, Product2.Name,ListPrice, UnitPrice from OpportunityLineItem];
    }

    // GET OPPORTUNITY list
    @AuraEnabled(cacheable = True)
    public static List<Opportunity> getOpportunityList(String searchString){
        if(searchString =='empty')
            return [SELECT Id, Name,Amount,AccountId,Account.Name from Opportunity];
        else{
            string userInput = '%'+searchString+'%';
            return [SELECT Id, Name,Amount,AccountId,Account.Name from Opportunity where Name Like:userInput];
        }
    }
}