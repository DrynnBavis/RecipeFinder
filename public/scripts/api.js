var Api = (function () {
	var _ = {
		//private stuff here
		Init: function() {
			console.log("api inited");
			_.BindEvents();
		},
		BindEvents: function() {
			//jquery element handling here
			$("#search-form").submit(function(e) {
				$('#recipe-result').html("");
				e.preventDefault();
				console.log("submit called!");
				$('#recipe-result').addClass('loader');
				var search = $('#input').val().trim();
				$('#input').val("");
				_.GetRecipe(search);
			});
		},
		GetRecipe: function(searchWord) {
			console.log(searchWord);
			$.ajax({
				type: 'GET',
				url: 'https://api.edamam.com/search?q=' + searchWord + '&app_id=a0908305&app_key=ed78ed737cdb4d9933fbb78749103877',
				contentType: 'application/json; charset=utf-8',
				dataType: 'json'
			}).then(function (response) {
				var recipe = response.hits[0].recipe;
				if (recipe !== undefined){
				var link = recipe.url;
				var label = recipe.label;
				var ingred = recipe.ingredients;
				var html = "<h2>" + label + "</h2><ul>";
				ingred.forEach(function(item) {
					html += "<li>" + item.text + "</li>";				});
				html += "</ul></br><a href=\x22" + link + "\x22 target=\x22_blank\x22>Take me to the recipe!</a>";
				$('#recipe-result').html(html);
				}
				else{
					$('#recipe-result').html("<p>No recipes were found : (</p>");
				}

				$('#recipe-result').removeClass('loader');
			});
		}
	}

	$(function () {
		_.Init();
	});
	return {
		PublicMethod: function (param) {
			return param;
		}
	}
})();
