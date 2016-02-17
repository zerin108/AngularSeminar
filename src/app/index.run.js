(function() {
  'use strict';

  angular
    .module('angularSeminar')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {

    //прикручиваем permission
    //плюсы данного решения: возможность прикрутить быстро, минусы: делается исключительно синхронно.

    $rootScope.$on('$stateChangeStart', function(e, toState, toParams){
      //проверяем, есть ли у пользователя право попасть сюда.
      //если нет, то код ниже
      e.preventDefault();
    });
    $rootScope.$on('$stateChangeError', function(){

      throw arguments[5];


    });

    $log.debug('runBlock end');
  }

})();
