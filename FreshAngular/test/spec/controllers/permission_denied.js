'use strict';

describe('Controller: PermissionDeniedCtrl', function () {

  // load the controller's module
  beforeEach(module('freshAngularApp'));

  var PermissionDeniedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PermissionDeniedCtrl = $controller('PermissionDeniedCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PermissionDeniedCtrl.awesomeThings.length).toBe(3);
  });
});
