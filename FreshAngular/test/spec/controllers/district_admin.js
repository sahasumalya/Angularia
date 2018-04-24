'use strict';

describe('Controller: DistrictAdminCtrl', function () {

  // load the controller's module
  beforeEach(module('freshAngularApp'));

  var DistrictAdminCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DistrictAdminCtrl = $controller('DistrictAdminCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DistrictAdminCtrl.awesomeThings.length).toBe(3);
  });
});
