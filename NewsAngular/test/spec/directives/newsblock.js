'use strict';

describe('Directive: newsBlock', function () {

  // load the directive's module
  beforeEach(module('newsAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<news-block></news-block>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the newsBlock directive');
  }));
});
