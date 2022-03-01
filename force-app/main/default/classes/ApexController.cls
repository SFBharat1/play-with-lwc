/****************************************************************************************************
 * DESCRIPTION	:	LWC SERVER CONTROLELR
 * *************************************************************************************************/
public class ApexController {

    @AuraEnabled(cacheable=true)
    public static List<Account> allAccount(String searchKey){
        string queryC ='SELECT id,Name from Account';
        if(searchKey=='' || searchKey=='None' || searchKey=='undefined'){
            return null;
        }
        else{
            queryC+=' where Name like \''+searchKey+'%\' Limit 5';
            return (List<Account>)Database.query(queryC);
        }
    }
}