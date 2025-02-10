//EmployeeController

app.controller("EmployeeController", function ($scope, $http) {
    $http.get("http://localhost:55628/api/Employee").then(function (response) {
        $scope.employees = response.data;
    });
});

//AddEmployeeController

app.controller("AddEmployeeController", function ($scope, $http, $location) {
    $scope.employee = {
        Name: "",
        Position: "",
        Office: "",
        Salary: 0
    };

    $scope.addEmployee = function () {
    
        $http({
            method: "POST",
            url: "http://localhost:55628/api/Employee",
            data: JSON.stringify($scope.employee),
            headers: { "Content-Type": "application/json" }
        })
        .then(function (response) {
            alert("Employee added successfully!");
            $location.path("/employees");
        })
        .catch(function (error) {
            console.error("Error adding employee:", error);
            alert("Failed to add employee: " + JSON.stringify(error.data));
        });
    };
    
    $scope.cancel = function () {
        $location.path("/employees");
    };
});

// EditEmployeeController

app.controller("EditEmployeeController", function ($scope, $http, $routeParams, $location) {
    var employeeId = $routeParams.id;
    $http.get("http://localhost:55628/api/Employee/" + employeeId).then(function (response) {
        $scope.employee = response.data;
    }, function (error) {
        console.error("Error fetching employee data", error);
    });

    $scope.updateEmployee = function () {
        $http.put("http://localhost:55628/api/Employee/" + employeeId, $scope.employee).then(
            function (response) {
                alert("Employee updated successfully");
                $location.path("/employees");
            },
            function (error) {
                console.error("Error updating employee", error);
            }
        );
    };

    $scope.cancel = function () {
        $location.path("/employees");
    };

});

// DeleteEmployeeController

app.controller("DeleteEmployeeController", function ($scope, $http, $routeParams, $location) {
    var id = $routeParams.id;
    $http.get("http://localhost:55628/api/Employee/" + id).then(
        function (response) {
            $scope.employee = response.data;
        },
        function (error) {
            console.error("Error fetching employee data", error);
        }
    );

    $scope.deleteEmployee = function () {
        $http.delete("http://localhost:55628/api/Employee/" + id).then(
            function (response) {
                alert("Employee deleted successfully");
                $location.path("/employees");
            },
            function (error) {
                console.error("Error deleting employee", error);
            }
        );
    };

    $scope.cancel = function () {
        $location.path("/employees");
    };
});
