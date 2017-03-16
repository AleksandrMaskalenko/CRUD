package com.startspringboot.controller;

import com.startspringboot.model.Song;
import com.startspringboot.service.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SongController {

    @Autowired
    private SongService songService;

    @RequestMapping("/songs")
    public List<Song> getAllSongs() {
        return songService.listSong();
    }

    @RequestMapping(value = "/song/{id}")
    public Song getSong(@PathVariable int id) {
        return songService.getSong(id);
    }

    @RequestMapping(value = "/song/add", method = RequestMethod.POST)
    public void addSong(@RequestBody Song song) {
        songService.addSong(song);
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public void deleteSong(@PathVariable int id) {
        songService.deleteSong(id);
    }

    @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
    public void updateSong(@RequestBody Song song, @PathVariable int id) {
        songService.updateSong(song, id);
    }

    @RequestMapping("songData/{id}")
    public String songData(@RequestBody Model model, @PathVariable int id) {
        model.addAttribute("song", songService.getSong(id));

        return "songData";
    }
}
