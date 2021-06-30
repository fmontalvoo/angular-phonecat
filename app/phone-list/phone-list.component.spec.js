describe('phoneList', function() {

    // Cargar el módulo que contiene el componente `phoneList` antes de cada prueba
    beforeEach(module('phoneList'));
  
    // Prueba el controller
    describe('PhoneListController', function() {
  
      it('should create a `phones` model with 3 phones', inject(function($componentController) {
        var ctrl = $componentController('phoneList');
  
        expect(ctrl.phones.length).toBe(3);
      }));
  
    });
  
  });