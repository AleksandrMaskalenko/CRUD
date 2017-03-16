package com.startspringboot.model;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Song {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "song_name")
    private String name;

    @Column(name = "song_author")
    private String author;

    @Column(name = "song_duration")
    private String duration;

    @Column(name = "song_date")
    private Date date;

    public Song() {
    }

    public Song(String name, String author, String duration, Date date) {
        this.name = name;
        this.author = author;
        this.duration = duration;
        this.date = date;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

}
