angular.module('myApp',[])
.directive('treeListgb',treeListgb)
.controller('treeListGBContr',['$scope',handle]);

function treeListgb(){
  var directive={
    restrict:'AEC',
    template:'<h1 ng-click="al()">自定义指令</h1>',
  };
  return directive;
};

function handle($scope){
  $scope.al = function(){
  	alert('66')
  }
}