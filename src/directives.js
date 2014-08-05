'use strict';

angular.module('myApp')

.directive('zippy', function(){
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      title:'@'
    },
    template:
      '<div class="zippy" ng-class="state ? \'opened\' : \'closed\'">' +
        '<div class="title" ng-click="toggle()">{{title}}</div>' +
        '<div class="body" ng-transclude></div>' +
      '</div>',

    link: function(scope, element, attrs) {
      scope.state = true;

      scope.name = "Attempting to Overwrite";

      scope.toggle = function() {
        scope.state = !scope.state;
      }
    }
  }
});
