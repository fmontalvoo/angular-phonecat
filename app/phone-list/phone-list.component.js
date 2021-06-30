// Registrar el componente `phoneList`, junto con su controlador y plantilla asociados
angular
    .module('phoneList')
    .component('phoneList', { // Este nombre es el que utiliza AngularJS para hacer coincidir con el elemento `<phone-list>`.
        templateUrl: 'phone-list/phone-list.template.html',
        controller: function PhoneListController() {
            this.phones = [
                {
                    name: 'Nexus S',
                    snippet: 'Fast just got faster with Nexus S.'
                },
                {
                    name: 'Motorola XOOM™ with Wi-Fi',
                    snippet: 'The Next, Next Generation tablet.'
                },
                {
                    name: 'MOTOROLA XOOM™',
                    snippet: 'The Next, Next Generation tablet.'
                }
            ];
        }
    });