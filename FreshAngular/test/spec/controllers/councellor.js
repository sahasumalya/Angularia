'use strict';

describe('Controller: CouncellorCtrl', function () {

  // load the controller's module
  beforeEach(module('freshAngularApp'));

  var CouncellorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CouncellorCtrl = $controller('CouncellorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CouncellorCtrl.awesomeThings.length).toBe(3);
  });
});
