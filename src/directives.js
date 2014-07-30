'use strict';

myApp.directive('zippy', function(){
  return {
    restrict: 'E',
    transclude: true,
    scope: { 
      title:'@' 
    },
    template:
      '<div class="zippy {{state}}">' +
        '<div class="title" ng-click="toggle()">{{title}}</div>' +
        '<div class="body" ng-transclude></div>' +
      '</div>',

    link: function(scope, element, attrs) {
      scope.state = "opened";

      scope.name = "Attempting to Overwrite";

      scope.toggle = function() {
        scope.state = scope.state == 'opened' ? 'closed' : 'opened';
      }
    }
  }
});
