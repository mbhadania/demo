/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example;


import java.util.Map;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author Miten Bhadania
 */
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class GreetingController {

    @RequestMapping(value = "/")
    public String greetingForm(Map<String, Object> model) {
        //model.put("name", new Greeting(2,"sdadsdsasa"));  
        return "greeting";
        //ModelAndView mav= new ModelAndView("greeting");
        //mav.addObject("greeting", new Greeting());
        //return mav;
        //yo
    }

    @RequestMapping(value = "/greeting", method = RequestMethod.GET)
    public String greetingSubmit(@ModelAttribute Greeting greeting, Model model) {
        model.addAttribute("greeting", greeting);
        return "results";
    }

    @RequestMapping(value = "/greeting", method = RequestMethod.POST)
    public String greetingSubmit2(@ModelAttribute Greeting greeting, Model model) {
        greeting.setContent(greeting.getContent()+"qqqqqqqqq");
        model.addAttribute("greeting", greeting);
        return "results";
    }
}
