describe('Test inhject the module login', function() {
  beforeEach(module('solutis'))

  var $controller

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_
  }));

  describe('Test login with user and password', function() {
    it('$scope login', function() {
      let $scope = {}
      let $state = {}
      let $localStorage = window.localStorage
      let controller = $controller('Login.LoginController', { $scope: $scope, $state, });
      
      $scope.email = 'vi_dualcore@hotmail.com'
      $scope.password = 'dualcore'

      expect($scope.email).not.toBeNull('vi_dualcore@hotmail.com');
      expect($scope.password).not.toBeNull('dualcore');
      
      $scope.loguin()

      expect($localStorage.getItem('apiKey')).not.toBeNull()
      expect($localStorage.getItem('hash')).not.toBeNull()
      expect($localStorage.getItem('ts')).not.toBeNull()

    })
  })
  
});