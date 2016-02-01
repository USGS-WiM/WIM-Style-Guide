var resumeApp = angular.module('resumeApp', ['ngRoute']);

// configure our routes
resumeApp.config(function($routeProvider) {
    $routeProvider

    // route for the pages
    .when('/', {
        templateUrl : 'pages/setup.html',
        controller  : 'setupController'
    })
    .when('/structure', {
        templateUrl : 'pages/structure.html',
        controller  : 'structureController'
    })
    .when('/design', {
        templateUrl : 'pages/design.html',
        controller  : 'designController'
    })
    .when('/typography', {
        templateUrl : 'pages/typography.html',
        controller  : 'typographyController'
    })
    .when('/forms', {
        templateUrl : 'pages/forms.html',
        controller  : 'formsController'
    })
    .when('/icons', {
        templateUrl : 'pages/icons.html',
        controller  : 'iconsController'
    })

});

// create the controller and inject Angular's $scope
resumeApp.controller('setupController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

resumeApp.controller('structureController', function($scope) {
    $scope.scrollIt = function(element) {
        $( 'html, body').animate({
          scrollTop: $(element).offset().top
        }, 500);
    }

    $(".close-alert").click(function(){
        $(this).parent().slideUp(250);
    });
    $("#show-demo-alert").click(function(){
        $("#demo-alert-fixed").slideDown(250);
    });
});

resumeApp.controller('designController', function($scope, $location, $anchorScroll) {
    $scope.scrollIt = function(element) {
        $( 'html, body').animate({
          scrollTop: $(element).offset().top
        }, 500);
    }


    $scope.primaryBlue = $('.blue').css("background-color");
        $scope.primaryBlued = $('.blue > .alternate1').css("background-color");
        $scope.primaryBluel = $('.blue > .alternate2').css("background-color");
    $scope.primaryBlack = $('.black').css("background-color");
        $scope.primaryBlackd = $('.black > .alternate1').css("background-color");
        $scope.primaryBlackl = $('.black > .alternate2').css("background-color");
    $scope.primaryGrey = $('.grey').css("background-color");
        $scope.primaryGreyd = $('.grey > .alternate1').css("background-color");
        $scope.primaryGreyl = $('.grey > .alternate2').css("background-color");
    $scope.lightblue = $('.lightblue').css("background-color");
        $scope.lightblued = $('.lightblue > .alternate1').css("background-color");
    $scope.green = $('.green').css("background-color");
        $scope.greend = $('.green > .alternate1').css("background-color");
    $scope.yellow = $('.yellow').css("background-color");
        $scope.yellowd = $('.yellow > .alternate1').css("background-color");
    $scope.red = $('.red').css("background-color");
        $scope.redd = $('.red > .alternate1').css("background-color");
});

resumeApp.controller('typographyController', function($scope, $location, $anchorScroll) {
    $scope.scrollIt = function(element) {
        $( 'html, body').animate({
          scrollTop: $(element).offset().top
        }, 500);
    }
});


resumeApp.controller('formsController', function($scope, $location, $anchorScroll) {
    $scope.scrollIt = function(element) {
        $( 'html, body').animate({
          scrollTop: $(element).offset().top
        }, 500);
    }
});

resumeApp.controller('iconsController', function($scope, $location, $anchorScroll) {
    $scope.scrollIt = function(element) {
        $( 'html, body').animate({
          scrollTop: $(element).offset().top
        }, 500);
    }
});
