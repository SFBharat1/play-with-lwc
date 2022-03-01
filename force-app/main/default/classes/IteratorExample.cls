public class IteratorExample implements Database.Batchable<Employee> {
    
    private class Employee {
        String name;
        String Title;
        Integer code;
    }
    
    public Employee[] start(Database.BatchableContext bc) {
        Employee[] execs = new Employee[]{};
            for(Integer i=0;i<10;i++){
                Employee em = new Employee();
                em.name='Aman'+i;
                em.title='Trainee';
                em.code=i;
                execs.add(em);
            }
        
        return execs;
    }
    
    public void execute(Database.BatchableContext bc, Employee[] execs) {
        for (Employee exec : execs) {
            System.debug('EMPLOYEE NAME ==> '+exec.Name+' code: '+exec.code);
        }   
    }
    
    public void finish(Database.BatchableContext bc) {
        System.debug('@@@@@@@@@ finish Method ');
    }
}