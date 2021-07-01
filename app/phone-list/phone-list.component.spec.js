describe('phoneList', function () {

  // Carga el módulo que contiene el componente `phoneList` antes de cada prueba
  beforeEach(module('phoneList'));

  // Prueba el controller
  describe('PhoneListController', function () {
    var $httpBackend, ctrl;

    // El inyector ignora los guiones bajos iniciales y finales aquí (es decir, _$httpBackend_).
    // Esto nos permite inyectar un servicio y asignarlo a una variable con el mismo nombre
    // que el servicio evitando un conflicto de nombres.
    beforeEach(inject(function ($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/phones.json')
        .respond([{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);

      ctrl = $componentController('phoneList');
    }));

    it('should create a `phones` property with 2 phones fetched with `$http`', function () {
      expect(ctrl.phones).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.phones).toEqual([{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);
    });

    it('should set a default value for the `orderProp` property', function () {
      expect(ctrl.orderProp).toBe('age');
    });

  });

});