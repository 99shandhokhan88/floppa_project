package com.example.floppa.eShop;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.EnumMap;

@Document(collection = "products")
public class Product {
    @Id
    private String id;
    private String name;
    private String imageUrl;
    private double price;
    private String description;
    private Date date;
    private String materiale;
    private EnumMap<Size, Integer> sizeSupplyCount;

    public Product(String id, String name, String imageUrl, double price, String description, Date date, String materiale, EnumMap<Size, Integer> sizeSupplyCount) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
        this.date = date;
        this.materiale = materiale;
        this.sizeSupplyCount = sizeSupplyCount;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getMateriale() {
        return materiale;
    }

    public void setMateriale(String materiale) {
        this.materiale = materiale;
    }

    public EnumMap<Size, Integer> getSizeSupplyCount() {
        return sizeSupplyCount;
    }

    public void setSizeSupplyCount(EnumMap<Size, Integer> sizeSupplyCount) {
        this.sizeSupplyCount = sizeSupplyCount;
    }
}
