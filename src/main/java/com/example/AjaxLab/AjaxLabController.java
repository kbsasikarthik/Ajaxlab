//@ Sasikaladevi Kumarasamy
package com.example.AjaxLab;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class AjaxLabController {

	@RequestMapping("/")
	public ModelAndView homePage() {
		return new ModelAndView("index");
	}
	
	@RequestMapping("/hall-of-fame")
	public ModelAndView showContent() {
		return new ModelAndView("halloffame");
	}
	
}
