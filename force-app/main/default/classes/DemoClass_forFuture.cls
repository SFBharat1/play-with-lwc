public class DemoClass_forFuture {

    @future
    public static void iamFuture(){
        System.debug('@@@@@ INSIDE FUTURE form VS CODE @@@@@');
        Database.executeBatch(new IteratorExample(),1);
    }
}