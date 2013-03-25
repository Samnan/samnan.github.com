---
layout: post
title: "Imploding a simple PHP array. Are you upto the challenge?"
date: 2013-03-25 17:00
description: "Concatenating a simple PHP array"
keywords: "php code problem array concat implode"
comments: true
categories: 
- code
- php
- problems
---

I have been developing applications with PHP for more than 10 years, and every now and then something comes up that looks to be fairly trivial task as first, yet it takes up a considerable amount of time to actually get done because of some of the PHP quirks (or features as you may call it). Here is one of my recent encounter with a piece of code, that I would like you to try out and see how fast you can achieve the desired results.
<!--more-->

##The Problem

You have an array of few data values, and your task is to generate a string that represents the concatenated values of the array as output. Simple isn't it, let's check the code and find out.

##The Code


		<?php
			$data = array(
				'name' => "James",
				'id' => 746820,
				'amount' => 10.00,
				'status' => 'valid'
			);
		
		// write code here that will output the array values concatenated into a single string
		// $output = .....
		// echo $output;
		
		// the resulting output on screen should be as below (without starting comments of course)
		// James74682010.00valid
		
		?>
		
Notes:

* The array keys are known (there maybe more, but the idea is to keep the code simple here)
* The array data types are known, but the values are not, e.g. the key 'amount' may contain either of the following values:
	2.5, 10.00, 100.50, 1.250, 1.245 etc
* Your solution should use the $data array to generate the output in some way. You are allowed to modify the $data array as you like.
	
##The Result
Here is a quick piece of code to get you started:

		$output = implode('', $data);
		echo $output;
		
However, you will (not) be disappointed to see that the output is not exactly what is desired. I will leave you to figure out why PHP is doing it, and you can try finding a solution to see how good you are at PHP, depending on the amount of time you take to solve this. I will keep my solution style "display:none" to feed your curiosity :)

Feel free to post your solution as comments.