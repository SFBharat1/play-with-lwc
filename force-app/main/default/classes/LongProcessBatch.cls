/*************************************************************************
* @ Descripiton	:	long process job
* ***********************************************************************/

public class LongProcessBatch implements Database.Batchable<sObject>{
    
    public Database.QueryLocator start(Database.BatchableContext BC){
        System.debug('@@@@@@@ Batch START => ');
        return Database.getQueryLocator('SELECT id, name, AnnualRevenue FROM Account');
        //return null;
    }
    
    // execute method**
    public  void execute(Database.BatchableContext BC,List<Account> accList){
        System.debug('@@@@@@@ Batch EXECUTE => ');
        Integer  default_AverageRevenue = 300000;
        Map<Id, Integer> annualRevenue_Map = new Map<Id, Integer>();
        for(Account acc : accList){
            if(acc.AnnualRevenue!=null)
                annualRevenue_Map.put(acc.Id, Integer.valueOf(acc.AnnualRevenue));
            else
                annualRevenue_Map.put(acc.Id, default_AverageRevenue);
        }
        
        List<Opportunity> oppList = [SELECT id, Amount, AccountId FROM opportunity];
       	
        for(Opportunity opp : oppList){
        	for(String acId : annualRevenue_Map.keySet()){
                if(opp.Accountid!=null && opp.AccountId==acId){
                    System.debug('@@@@@####');
                }
                Integer j=0;
                for(Integer i=1;i<1000 ; i++){
                    j++;
                }
        	}    
        }
        
    }
    
    // finish method**
    public  void finish(Database.BatchableContext BC){
         System.debug('@@@@@#### FINISH ');
    }
    
    
}