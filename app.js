var app = angular.module("employeeApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "views/employees.html",
        controller: "EmployeeController"
    })
    .when("/add", {
        templateUrl: "views/add-employee.html",
        controller: "AddEmployeeController"
    })
    .when("/edit/:id", {
        templateUrl: "views/edit-employee.html",
        controller: "EditEmployeeController"
    })
    .when("/delete/:id", {
        templateUrl: "views/delete-employee.html",
        controller: "DeleteEmployeeController"
    })
    .otherwise({
        redirectTo: "/"
    });
});
