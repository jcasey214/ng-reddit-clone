angular.module('filter', []).filter('dateFilter', function(){
  return function(input){
    return moment([input]).fromNow();
  };
});
