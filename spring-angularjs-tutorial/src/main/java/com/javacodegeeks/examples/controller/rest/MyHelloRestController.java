package com.javacodegeeks.examples.controller.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyHelloRestController {

	@RequestMapping("/welcome")
	public final String welcomeName() {
		return "Welcome Carlos";
	}

}
