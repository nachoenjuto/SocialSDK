require(["sbt/dom", "sbt/json", "sbt/smartcloud/ProfileService"], 
    function(dom,json,ProfileService) {
    var results = null;
    try {
        var profileService = new ProfileService();
        var promise = profileService.getProfileByGUID("%{sample.smartcloud.subscriberId}");
        promise.then(    
            function(profile){
            	results = getResults(profile);
                dom.setText("json", json.jsonBeanStringify(results));
            },
            function(error){            	
                dom.setText("json", json.jsonBeanStringify(error));
            }
        );
    } catch(error) {
        dom.setText("json", json.jsonBeanStringify(error));
    }
});

function getResults(profile) {
    return {
    	"getUserId" : profile.getId(),
        "getName" : profile.getDisplayName(),
        "getThumbnailUrl" : profile.getThumbnailUrl(),
        "getEmail" : profile.getEmail(),
        "getAddress" : profile.getAddress(),
        "getDepartment" : profile.getDepartment(),
        "getTitle" : profile.getTitle(),
        "getProfileUrl" : profile.getProfileUrl(),
        "getPhoneNumber" : profile.getPhoneNumber(),
        "getCountry" : profile.getCountry(),
        "getOrganisationId" : profile.getOrgId(),
        "getAbout" : profile.getAbout()
    };
}