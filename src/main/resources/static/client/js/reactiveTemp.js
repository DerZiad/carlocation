voitures = []

function setUpVoiture(id) {
	console.log("ok")
	var selectedVoi = null;
	for (voiture of voitures) {
		if (voiture.id == id) {
			selectedVoi = voiture;
		}
	}
	if (selectedVoi != null) {
		$('#imageModal').attr("src", "data:image/jpeg;base64," + selectedVoi.base64);
		$("#marqueModal").html(selectedVoi.marque)
		$("#categorieModal").html(selectedVoi.categorie)
		$("#annee").html(selectedVoi.annee)
		$('#idVoiture').val(selectedVoi.id)
	}
}



let productNumber = 0;
jQuery(document).ready(function() {
	$.ajax({
		type: "GET",
		headers: { Accept: "application/json" },
		contentType: "application/json",
		url: "/api/voitures/",
		success: function(response) {
			voitures = response
		}, error: function(xhr, ajaxOptions, thrownError) {

		}
	});
	$('#reserver').click(function() {
		 
			var username = $('#username').val()
			if (username != undefined) {
				console.log("ok")
				var delai =$('#delai').val();
				var idVoiture = $('#idVoiture').val();
				datas = {
					'delai': delai,
					'idVoiture':idVoiture
				}
				datas = JSON.stringify(datas);
				console.log(datas)
				$.ajax({
					type: "POST",
					headers: { Accept: "application/json" },
					contentType: "application/json",
					url: "/api/voitures",
					data: datas,
					success: function(response) {
						$('#confirmation').html("Vous allez recevoir un email de confirmation de nos managers")
					}, error: function(xhr, ajaxOptions, thrownError) {

					}
				});
			}else{
				window.location.replace("/login");
			}
		});

	/*
	var username = $("input[name=username]").val();
	if (username != undefined) {
		let numbers = $('input[name=reservationNumber]').val();
		if (numbers != null) {
			productNumber = numbers;
		}
		$('#numberPanier').html(productNumber)
		//Call all reservations
		$.ajax({
			type: "GET",
			headers: { Accept: "application/json" },
			contentType: "application/json",
			url: "/api/reservation/username?username=" + username,
			success: function(response) {
				for (reservation of response) {
					reservations.push(reservation);
					voyagesID.push(reservation.voyage.id);
				}
			}, error: function(xhr, ajaxOptions, thrownError) {
				var message = xhr['responseJSON'].message;
				message = JSON.parse(message);
				keys = Object.keys(message);
				for (let i = 0; i < keys.length; i++) {
					$('#' + keys[i] + 'Error').html(message[keys[i]]);
				}
			}
		});

	}

	var username = $("input[name=username]").val();
	if (username != undefined) {
		let idPerson = $('input[name=idPerson]').val();
		$.ajax({
			type: "GET",
			headers: { Accept: "application/json" },
			contentType: "application/json",
			url: "/api/like/" + idPerson,
			success: function(response) {
				likes = response
				for (like of likes) {
					$("."+ like.id.idPerson + "-" + like.id.idVoyage).addClass("liked");
				}
			}, error: function(xhr, ajaxOptions, thrownError) {

			}
		});
	}
	*/

});
/*
function liked(id) {

	var username = $("input[name=username]").val();
	if (username != undefined) {
		let idPerson = $('input[name=idPerson]').val();
		let action = true;
		var likeObj = null;
		for (like of likes) {
			if (like.id.idVoyage == id && like.id.idPerson == idPerson) {
				likeObj = like
				action = false;
			}
		}

		if (action == true) {
			datas = {
				'idVoyage': id,
				'idPerson': idPerson
			}
			datas = JSON.stringify(datas);
			$.ajax({
				type: "POST",
				headers: { Accept: "application/json" },
				contentType: "application/json",
				url: "/api/like",
				data: datas,
				success: function(response) {
					$('.' +idPerson + "-"  + id).addClass("liked");
					likes.push(response)
				}, error: function(xhr, ajaxOptions, thrownError) {

				}
			});
		} else {
			datas = {
				'idVoyage': id,
				'idPerson': idPerson
			}
			datas = JSON.stringify(datas);
			$.ajax({
				type: "POST",
				headers: { Accept: "application/json" },
				contentType: "application/json",
				url: "/api/like/delete/" + idPerson +"/" + id,
				data: datas,
				success: function(response) {
					$('.' +idPerson + "-"  + id).removeClass("liked");
					likes = likes.filter(item => item !== likeObj)
				}, error: function(xhr, ajaxOptions, thrownError) {

				}
			});
		}
	} else {
		window.location.replace("/login");
	}
}

function addToChart(id) {

	var username = $("input[name=username]").val();
	if (username != undefined) {
		var test = 1;
		for (voyage of voyagesID) {
			if (voyage == id) {
				test = 0;
			}
		}
		if (test == 1) {
			voyagesID.push(id)
			datas = {
				'idVoyage': id,
				'idPerson': $('input[name=idPerson]').val()
			}
			datas = JSON.stringify(datas);
			$.ajax({
				type: "POST",
				headers: { Accept: "application/json" },
				contentType: "application/json",
				url: "/api/reservation",
				data: datas,
				success: function(response) {
					reservations.push(response);
				}, error: function(xhr, ajaxOptions, thrownError) {
					var message = xhr['responseJSON'].message;
					message = JSON.parse(message);
					keys = Object.keys(message);
					for (let i = 0; i < keys.length; i++) {
						$('#' + keys[i] + 'Error').html(message[keys[i]]);
					}
				}
			});

			productNumber++;
			$('#numberPanier').html(productNumber);
		}
	} else {
		window.location.replace("/login");
	}
}*/