angular
    .module('phoneDetail')
    .component('phoneDetail', {
        templateUrl: 'phone-detail/phone-detail.template.html',
        controller: ['$http', '$routeParams',
            function PhoneDetailController($http, $routeParams) {
                const self = this;

                self.setImage = function setImage(imageUrl) {
                    self.mainImageUrl = imageUrl;
                }

                $http.get(`phones/${$routeParams.phoneId}.json`)
                    .then(function (response) {
                        self.phone = response.data;
                        self.mainImageUrl = self.phone.images[0];
                    });
            }
        ]
    });