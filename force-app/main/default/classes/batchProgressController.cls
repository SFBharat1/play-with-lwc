public class batchProgressController {

    // Method1: Call batch
    @AuraEnabled(cacheable=true)
    public static String callBatch(){
        System.debug('@@@@@@@ Starting batch => ');
        id jobId = database.executeBatch(new LongProcessBatch(), 1);
        System.debug('@@@@@@@ Batch Id => '+jobId);
        return jobId;
    }

    // Mthod2: Return bach status
    @AuraEnabled(cacheable=true)
    public static Integer checkStatus(String jobId){
        try {
            System.debug('######@@@@ progress check =>'+jobId);
            System.debug('@@@@@@@@@ quer result => '+[SELECT Id, JobType, TotalJobItems, Status, JobItemsProcessed FROM AsyncApexJob  where id=:jobId limit 1]);
            AsyncApexJob  acj = [SELECT Id, JobType, TotalJobItems, Status, JobItemsProcessed FROM AsyncApexJob  where id=:jobId limit 1];
            if(acj!=null){
                System.debug('$$$$$ JobItemsProcessed => '+acj.JobItemsProcessed);
                System.debug('$$$$$ TotalJobItems => '+acj.TotalJobItems);
                Integer percentageCovered = (acj.JobItemsProcessed/acj.TotalJobItems)*100;
                System.debug('######@@@@ PROGRESS => '+percentageCovered);
                return percentageCovered;
            }
            else {
                System.debug('#####@@ else statement ');
                return -1;
            }
            
        } catch (Exception ex) {
            System.debug('###### EXCEPTION '+ex.getMessage()+' line: => '+ex.getLineNumber()+' Cause=> '+ex.getCause());
            //throw new AuraHandledException(ex.getMessage());
            return -1;
        }
    }
}
