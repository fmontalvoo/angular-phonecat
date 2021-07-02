'use strict';

describe('Phone', function() {
  var $httpBackend;
  var Phone;
  var phonesData = [
    {name: 'Phone X'},
    {name: 'Phone Y'},
    {name: 'Phone Z'}
  ];

  // Añade un comprobador de igualdad personalizado antes de cada prueba
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Carga el módulo que contiene el servicio `Phone` antes de cada prueba
  beforeEach(module('core.phone'));

  // Instancia el servicio y "entrena" a `$httpBackend` antes de cada prueba
  beforeEach(inject(function(_$httpBackend_, _Phone_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('phones/phones.json').respond(phonesData);

    Phone = _Phone_;
  }));

  // Verificar que no hay expectativas o solicitudes pendientes después de cada prueba
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the phones data from `/phones/phones.json`', function() {
    var phones = Phone.query();

    expect(phones).toEqual([]);

    $httpBackend.flush();
    expect(phones).toEqual(phonesData);
  });

});