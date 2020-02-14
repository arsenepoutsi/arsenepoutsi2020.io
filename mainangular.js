var app = angular.module('projetMadera', [
    'ngRoute'
]);

/**
 * Configuration des routes
 */
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    // Home
        .when("/", { templateUrl: "pages/home.html", controller: "PageCtrl" })
        // Pages
        .when("/entreprise", { templateUrl: "pages/entreprise.html", controller: "PageCtrl" })
        .when("/solutions", { templateUrl: "pages/solutions.html", controller: "PageCtrl" })
        .when("/contact", { templateUrl: "pages/contact.html", controller: "PageCtrl" })
        // else 404
        .otherwise("/404", { templateUrl: "pages/404.html", controller: "PageCtrl" });
}]);

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function( /* $scope, $location, $http */ ) {
    console.log("Page Controller reporting for duty.");
});