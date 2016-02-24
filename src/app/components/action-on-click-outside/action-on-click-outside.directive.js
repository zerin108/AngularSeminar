/**
 * Created by Lama on 25.02.2016.
 */
angular.module('ActionOnClickOutside', [])
.directive(function($document){
    "use strict";
    return {
      restrict:'A',
      link: function (scope, el, attrs) {
        $document.on('click', function(){
          if(e.target !== el){
            $scope.eval(attrs.actionOnClickOutside);
          }
        });

      }
    }
  });
