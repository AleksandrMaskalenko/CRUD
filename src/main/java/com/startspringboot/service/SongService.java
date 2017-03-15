package com.startspringboot.service;

import com.startspringboot.DAO.SongDao;
import com.startspringboot.model.Song;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SongService {

    @Autowired
    private SongDao songDao;

    public List<Song> listSong() {
        List<Song> songs = new ArrayList<>();
        songDao.findAll().forEach(songs::add);
        return songs;
    }

    public Song getSong(int id) {
        return songDao.getSongById(id);
    }

    public void addSong(Song song) {
        songDao.save(song);
    }

    public void deleteSong(int id) {
        songDao.deleteSongById(id);
    }

    public void updateSong(Song song, int id) {
        songDao.save(song);
    }
}
