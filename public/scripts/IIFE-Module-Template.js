var Api = (function () {
	var _ = {
		//private stuff here
		Init: function() {
			_.BindEvents();
		},
		BindEvents: function() {
			//jquery element handling here
		},
		SampleAjaxCall: function() {
			$.ajax({
				type: 'GET',
				url: '/api/Git/Files/',
				contentType: 'application/json; charset=utf-8',
				dataType: 'json'
			}).then(function (response) {
				//do stuff with reponse
			});
		}
	}

	$(function () {
		_.Init();
	});
	return {
		PublicMethod: function (param) {
			return param
		}
	}
})();
