'use strict';

describe('Directive: loggedin', function () {

  // load the directive's module and view
  beforeEach(module('votingApp'));
  beforeEach(module('app/main/loggedin/loggedin.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<loggedin></loggedin>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the loggedin directive');
  }));
});