/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example;

/**
 *
 * @author Miten Bhadania
 */
public class Greeting {

    private final long id;

    @Override
    public String toString() {
        return "Greeting{" + "id=" + id + ", content=" + content + ", content2=" + content2 + '}';
    }

    
    private final String content;
    private final String content2;
    
    public Greeting(long id, String content, String content2) {
        this.id = id;
        this.content = content;
        this.content2 = content2;
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }
}