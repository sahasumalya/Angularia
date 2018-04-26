'use strict';

describe('Controller: NewssearchCtrl', function () {

  // load the controller's module
  beforeEach(module('newsAngularApp'));

  var NewssearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewssearchCtrl = $controller('NewssearchCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewssearchCtrl.awesomeThings.length).toBe(3);
  });
});
