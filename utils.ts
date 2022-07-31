namespace UserUtils {
    export class Parent {
        name;
        setname(fullname) {
            return this.name = fullname;
        }
    }
    export interface userType {
        getName();
    }
}