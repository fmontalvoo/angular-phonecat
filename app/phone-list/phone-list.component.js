// Registrar el componente `phoneList`, junto con su controlador y plantilla asociados
angular
    .module('phoneList')
    .component('phoneList', { // Este nombre es el que utiliza AngularJS para hacer coincidir con el elemento `<phone-list>`.
        templateUrl: 'phone-list/phone-list.template.html',
        controller: ['Phone',
            function PhoneListController(Phone) {
                this.phones = Phone.query();  

                this.orderProp = 'age';
            }]
    });