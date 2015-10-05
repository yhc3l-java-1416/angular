angular.module('myComponents').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/directives/social-buttons.html',
    "<div class=button-group><a href=http://facebook.com><button>facebook</button></a> <a href=http://twitter.com><button>twitter</button></a></div>"
  );


  $templateCache.put('src/directives/user.html',
    "<div><h2>User: {{user.name}}</h2><p ng-click=warn()>Welcome back {{user.nickname}}</p></div>"
  );

}]);
