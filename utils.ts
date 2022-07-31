namespace UserUtilss {
    export class Parent {
        name;
        setname(fullname) {
            return this.name = fullname;
        }
    }
    export interface userMethods {
        getName();
    }
}