app.service("StudentService", function($http) {
    const API_URL = "https://employeemanagementsystem-61v2.onrender.com/api/students"; 

    this.getStudents = function() {
        return $http.get(API_URL);
    };
});