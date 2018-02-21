var optlyState = window.optimizely.get('state');

var activeExperiments = optlyState.getActiveExperimentIds();

var variationMap = optlyState.getVariationMap();

var variations = [];

	for (var i=0; i<activeExperiments.length; i++) {
			variations.push(variationMap[activeExperiments[i]].id);
	}

var variationsValue = variations.join(',');

console.log(variationsValue);


window["optimizely"].push({
  "type": "user",
  "attributes": {
    "variations_exposed": variationsValue
  }
});
