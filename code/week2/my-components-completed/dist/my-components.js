/*! my-components - v1.0.0 - 2015-10-01 */
"use strict";

angular.module("myComponents", []);

angular.module("myComponents").run([ "$templateCache", function($templateCache) {
    $templateCache.put("src/directives/social-buttons.html", "<div class=button-group><a href=http://facebook.com><button>facebook</button></a> <a href=http://twitter.com><button>twitter</button></a></div>");
    $templateCache.put("src/directives/user.html", "<div><h2>User: {{user.name}}</h2><p ng-click=warn()>Welcome back {{user.nickname}}</p></div>");
} ]);

angular.module("myComponents").directive("mySelectAllOnFocus", function() {
    return {
        restrict: "A",
        link: function(scope, element) {
            element.mouseup(function(event) {
                event.preventDefault();
            });
            element.focus(function() {
                element.select();
            });
        }
    };
});

angular.module("myComponents").directive("mySocialButtons", function() {
    return {
        restrict: "E",
        templateUrl: "src/directives/social-buttons.html"
    };
});

angular.module("myComponents").directive("myUser", function() {
    return {
        restrict: "E",
        scope: {
            user: "="
        },
        templateUrl: "src/directives/user.html",
        controller: [ "$scope", function($scope) {
            $scope.warn = function() {
                alert("Watch out" + $scope.user.nickname);
            };
        } ]
    };
});