global class Demo_ContactBatch implements Database.Batchable<sobject>, Database.Stateful{
    Integer i=0;
    
    global Database.QueryLocator start(Database.BatchableContext bc){
        String query ='SELECT Id, FirstName, LastName FROM Contact';
        return Database.getQueryLocator(query);
    }
    
    global void execute(Database.BatchableContext bc, List<Contact> contactList){
        
        for(Contact con : contactList){
            con.FirstName = i+' '+con.FirstName;
            i += 1;
        }
    }
    
    global void finish(Database.BatchableContext bc){
		System.debug('@@@@@@ COMPLETED BATCH @@@@@@ ');
    }
}