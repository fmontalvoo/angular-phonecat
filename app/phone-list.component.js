// Registrar el componente `phoneList`, junto con su controlador y plantilla asociados
angular
    .module('phonecatApp')
    .component('phoneList', { // Este nombre es el que utiliza AngularJS para hacer coincidir con el elemento `<phone-list>`.
        template:
            '<ul>' +
            '<li ng-repeat="phone in $ctrl.phones">' +
            '<span>{{phone.name}}</span>' +
            '<p>{{phone.snippet}}</p>' +
            '</li>' +
            '</ul>',
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