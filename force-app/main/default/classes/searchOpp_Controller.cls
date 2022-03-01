public class searchOpp_Controller {
    
    @AuraEnabled(cacheable=true)
    public static list<Opportunity> getAllOpportunity(string searchString){
        try {
            String query='SELECT Name,Id,AccountId,Account.Name from Opportunity';
            if(searchString!=null && searchString!='')
                query+=' where name like \''+searchString+'%\'';
            else
                return null;
            
            List<Opportunity> oplist = new list<Opportunity>();
            oplist = database.query(query);
            System.debug('@@@@@@@## opp list '+opList);

            return database.query(query);
                
        } catch (Exception ex) {
            System.debug('@@@@ exception encountered '+ex.getCause()+' '+ex.getLineNumber() +' '+ex.getMessage());
            return null;
        }
    }
}