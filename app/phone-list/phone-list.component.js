// Registrar el componente `phoneList`, junto con su controlador y plantilla asociados
angular
    .module('phoneList')
    .component('phoneList', { // Este nombre es el que utiliza AngularJS para hacer coincidir con el elemento `<phone-list>`.
        templateUrl: 'phone-list/phone-list.template.html',
        controller: ['$http',
            function PhoneListController($http) {
                const self = this;
                self.orderProp = 'age';

                $http.get('phones/phones.json')
                    .then(function (response) {
                        self.phones = response.data;
                    });
            }]
    });