(function() {
  'use strict';

  angular
    .module('angularSeminar')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        resolve: {
          myResolve: function(){
            console.log(1);
          },
          isGranted: function(permissionService){

            //реализуем permission
            return permissionService/*.isGrantedAccesToAdmin()  */;
          }
    }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
