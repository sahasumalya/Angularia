'use strict';

describe('Controller: LeadCouncellorCtrl', function () {

  // load the controller's module
  beforeEach(module('freshAngularApp'));

  var LeadCouncellorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LeadCouncellorCtrl = $controller('LeadCouncellorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LeadCouncellorCtrl.awesomeThings.length).toBe(3);
  });
});
