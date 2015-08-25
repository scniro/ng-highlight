var app = angular.module('app', ['ngHighlight']);

app.controller('ctrl', function ($scope) {
    $scope.data = [
        { 'name': 'bob', 'age': 21, 'ocupation': 'skater' },
        { 'name': 'ethan', 'age': 23, 'ocupation': 'EMT' },
        { 'name': 'diana', 'age': 36, 'ocupation': 'server' },
        { 'name': 'miiiiiike', 'age': 18, 'ocupation': 'gamer' },
        { 'name': 'craignasty', 'age': 21, 'ocupation': 'designer' },
        { 'name': 'riggins', 'age': 23, 'ocupation': 'dudebro' }
    ];

    $scope.data2 = [
        { 'name': 'bob', 'age': 21, 'ocupation': 'skater' },
        { 'name': 'ethan', 'age': 23, 'ocupation': 'EMT' },
        { 'name': 'diana', 'age': 36, 'ocupation': 'server' },
        { 'name': 'miiiiiike', 'age': 18, 'ocupation': 'gamer' },
        { 'name': 'craignasty', 'age': 21, 'ocupation': 'designer' },
        { 'name': 'riggins', 'age': 23, 'ocupation': 'dudebro' }
    ];
});