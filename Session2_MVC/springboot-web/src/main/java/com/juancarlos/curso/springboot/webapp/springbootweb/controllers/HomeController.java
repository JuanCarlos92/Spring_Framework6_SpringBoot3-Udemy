package com.juancarlos.curso.springboot.webapp.springbootweb.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    
    @GetMapping({"", "/", "/home"}) // se puede especificar varios paths
    public String home() {

        return "redirect:/list"; // redirige a la ruta /list
        // return "forward:/list";
    }
}
