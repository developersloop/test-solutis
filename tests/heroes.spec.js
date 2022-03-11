beforeEach(module('solutis'));
    describe('service: API resource', function() {
    var $scope = null;
    var marvelService = null;
    var $httpBackend = null;
    var $controller = null;

    beforeEach(inject(function(_$controller_, $rootScope, _marvelService_, _$httpBackend_) {
        marvelService = _marvelService_;
        $controller = _$controller_
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('https://gateway.marvel.com/v1/public/characters?limit=100null&ts=1&apikey=cbb3521ea18336db7aebe6f7bec7a535&hash=4812d3ea5046d9edf56861dc776f8c93')
            .respond(200,{
                data: {
                    results: [
                        {
                            "id": 1017100,
                            "name": "A-Bomb (HAS)",
                            "description": "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
                            "modified": "2013-09-18T15:54:04-0400",
                            "thumbnail": {
                                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
                                "extension": "jpg"
                            },
                        },
                        {
                            "id": 1009144,
                            "name": "A.I.M.",
                            "description": "AIM is a terrorist organization bent on destroying the world.",
                            "modified": "2013-10-17T14:41:30-0400",
                            "thumbnail": {
                                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec",
                                "extension": "jpg"
                            },
                        }
                    ]
                }
            })
    }));
    it('expect all resource in API to br defined', function() {
        var $scope = {};
        let $state = {}
        let $stateParams = {}
        var controller = $controller('Heroes.HeroesController', {$scope: $scope, $state: $state, $stateParams: $stateParams});

        $scope.mounted()
        $httpBackend.flush();

        expect($scope.heroes).toBeDefined()
        expect($scope.heroes).not.toBeNull()
    });
});