public with sharing class documentController {
    
    // return list of contecnt version
    @AuraEnabled(cacheable=true)
    public static List<ContentVersion> getAttachments(string recordId){
        System.debug('#### SERVER CALLED '+recordId);
        list<String> contentDocumnetId_List = new list<String> ();
        for(ContentDocumentLink cdk : [SELECT ContentDocumentId from ContentDocumentLink where LinkedEntityId=:recordId]){
            contentDocumnetId_List.add(cdk.ContentDocumentId);
        }
        List<ContentVersion> contentVersionLinkList = [SELECT id,title,ContentDocumentId,fileExtension from ContentVersion where ContentDocumentId IN: contentDocumnetId_List];
        return contentVersionLinkList;
    }

}