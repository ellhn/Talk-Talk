(function() {
    angular.module('talkTalk', [])
    .config(function($sceProvider) {
        // Completely disable SCE for this test as to grab the API data  
        $sceProvider.enabled(false);
    })
})();
