<?php

	// load in mailchimp library
	include('./MailChimp.php');
	
	// namespace defined in MailChimp.php
	use \DrewM\MailChimp\MailChimp;
	
	// connect to mailchimp
	$MailChimp = new MailChimp('06d846de07a619b4411a2870f48fdf81-us18'); // put your API key here
	$list = '75a939cbc4'; // put your list ID here
	$email = $_GET['EMAIL']; // Get email address from form
	$id = md5(strtolower($email)); // Encrypt the email address
	// setup th merge fields
	$mergeFields = array(
        'EMAIl'=>$_GET['EMAIL'],
        '5PPURRFECT'  =>$_GET['5PPURRFECT']
		);

	// remove empty merge fields
	$mergeFields = array_filter($mergeFields);

	$result = $MailChimp->put("lists/$list/members/$id", array(
									'email_address'     => $email,
									'status'            => 'subscribed',
									'merge_fields'      => $mergeFields,
									'update_existing'   => true, // YES, update old subscribers!
							));
	echo json_encode($result);