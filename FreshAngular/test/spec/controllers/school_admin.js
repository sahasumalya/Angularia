'use strict';

describe('Controller: SchoolAdminCtrl', function () {

  // load the controller's module
  beforeEach(module('freshAngularApp'));

  var SchoolAdminCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SchoolAdminCtrl = $controller('SchoolAdminCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SchoolAdminCtrl.awesomeThings.length).toBe(3);
  });
});
