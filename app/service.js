(function() {
    'use strict';
    
    angular.module('talkTalk').factory('TalkTalkFactory', ['$http','$q',  function TalkTalkFactory($http,$q) {
        return {
            getData: function() {    
                var deferred = $q.defer(),
                config = {
                        params: { }
                    },
                url = "http://www.mocky.io/v2/58088826100000e9232b75b0";        
                
                $http.jsonp(url,config)
                .then(              
                    function (response) {
                        deferred.resolve(response.data);
                    },  
                    function (error) {
                        console.log(error);
                        return $q.reject('Error retrieving data');
                    }
                );
                
                return deferred.promise;
            }
        };
       
    

    
    

 

    // self.getData= function() {
    //       var deferred = $q.defer();
    //       $http({
    //           method: "GET",
    //           url: '../data/data-feed.json'
    //       })
    //       .then(
    //           function (response) {
    //               deferred.resolve(response.data);
    //           },  
    //           function (error) {
    //               console.log('error');
    //               return $q.reject('Error retrieving data');
    //           }
    //       );
         
    //       return deferred.promise;
    //     };
    }]);

})();
