"use strict";
var UserUtilss;
(function (UserUtilss) {
    class Parent {
        setname(fullname) {
            return this.name = fullname;
        }
    }
    UserUtilss.Parent = Parent;
})(UserUtilss || (UserUtilss = {}));
