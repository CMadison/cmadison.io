// jQuery(document).ready(function() {

// 	$('#contactform').submit(function() {

// 		var action = $(this).attr('action');
// // 		var values = $(this).serialize();

// 		$('#submit').attr('disabled', 'disabled');

// 		$("#message").slideUp(0, function() {

// 			$('#message').hide();

// 			$.post(action, values, function(data) {
// 				$('#message').html(data);
// 				$('#message').slideDown('slow');
// 				$('#submit').removeAttr('disabled');
// 				if(data.match('success') != null) $('#contactform')[0].reset();

// 			});

// 		});

// 		return false;

// 	});

// });
	
	// $('#contactform').submit(function() {

	// 	var action = $(this).attr('action');
	// 	var values = $(this).serialize();
	// 	var name = $('#name').val();
	// 	var email = $('#email').val();
	// 	var subject = $('#subject').val();
	// 	var comments = $('#comments').val();

	// 	$('#submit').attr('disabled', 'disabled');

	// 	$("#message").slideUp(0, function() {

	// 		$('#message').hide();

	// 		if (name && email && subject && comments) {
	// 			console.log('This should send! Yay!');
	// 			console.log(values);
	// 			$.post(action, values, function(data) {
	// 				console.log('this is data: ', data);
	// 				$('#message').html(data);
	// 				$('#message').show();
	// 				$('#message').slideDown('slow');
	// 				// $('#submit').removeAttr('disabled');
	// 				if(data.match('success') != null) $('#contactform')[0].reset();
	// 			});
	// 		} else {
	// 			if (!name) {
	// 				$('#message').html('<p>Name is required!</p>');
	// 				$('#message').show();
	// 			}
	// 			if (!email) {
	// 				$('#message').html('<p>Email is required!</p>');
	// 				$('#message').show();
	// 			}
	// 			if (!subject) {
	// 				$('#message').html('<p>Subject is required!</p>');
	// 				$('#message').show();
	// 			}
	// 			if (!comments) {
	// 				$('#message').html('<p>Name is required!</p>');
	// 				$('#message').show();
	// 			}
	// 		}

	// 	});

	// 	return false;

	// });
	

// This works, but needs form validation and error checking.
// $('#contactform').submit(function() {

// 		var values = $(this).serialize();

// 		$('#submit').attr('disabled', 'disabled');

// 		$("#message").slideUp(0, function() {

// 			$('#message').hide();

// 			$.ajax({
//         url: 'https://formspree.io/ckmadison4@gmail.com',
//         method: 'POST',
//         dataType: 'application/json',
//         data: values
//       }).done(function (data) {
//         console.log('this is data: ', data);
//         $('#message').html(data);
//         $('#message').slideDown('slow');
//         $('#submit').removeAttr('disabled');
//         if(data.match('success') != null) $('#contactform')[0].reset();
//       }).fail(function (err) {
//         console.log('Something went wrong: ', err)
//       });

// 		});

// 		return false;

// 	});

	


// });
