/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author Miten Bhadania
 */
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

    private static final String template = "Hello";
    private final AtomicLong counter = new AtomicLong();

  
    @RequestMapping("/")
    public ModelAndView greeting(@RequestParam(value="name", required=false, defaultValue="World") String name, Model model) {
       // System.out.println("\n\n\n\n\n  "+prop+"\n\n\n\n\n\n");
        ModelAndView mav= new ModelAndView("greeting");
        mav.addObject("name", name);
        mav.addObject("json1", new Greeting(11, template, template));
        
        return mav;
    }
}