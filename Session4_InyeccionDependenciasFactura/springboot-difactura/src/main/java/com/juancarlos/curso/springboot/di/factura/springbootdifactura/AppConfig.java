package com.juancarlos.curso.springboot.di.factura.springbootdifactura;

import java.util.Arrays;
import java.util.List;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import com.juancarlos.curso.springboot.di.factura.springbootdifactura.models.Item;
import com.juancarlos.curso.springboot.di.factura.springbootdifactura.models.Product;

@Configuration
@PropertySource("classpath:data.properties")
public class AppConfig {

    @bean
    List<Item> itemsInvoice(){
        Product p1 = new Product("Camara Sony", 800);
        Product p2 = new Product("Bicicleta  orbea", 1400);
        return Arrays.asList(new Item(p1,2),new Item(p2,4));

    }

}
