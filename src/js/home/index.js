import angular from 'angular';

// Create the module where our functionality can attach to
let homeModule = angular.module('app.home', []);

// Include our UI-Router config settings
import HomeConfig from './home.config';
homeModule.config(HomeConfig);


// Controllers
import HomeCtrl from './home.controller';

const MyController = function ($scope) {
  $scope.falabella = { name: 'falabella', reach: 0.54, frequency: 8.13 }
  $scope.paris = { name: 'paris', reach: 0.25, frequency: 3.06 }

  $scope.clickAction = (action, scope, prop, amount) => {
    if (action === 'increment') {
      $scope[scope][prop] += amount
    } else {
      $scope[scope][prop] -= amount
    }

    $scope[scope][prop] = parseFloat($scope[scope][prop].toFixed(2))
    
    $scope.emitBrandEvent()
  }

  $scope.emitBrandEvent = () => {
    window.dispatchEvent(new CustomEvent('BRANDS_EVENT_BUS', { detail: [$scope.falabella, $scope.paris]}))
  }
}

homeModule.controller('HomeCtrl', HomeCtrl)
homeModule.controller('MyController', MyController)
export default homeModule;
