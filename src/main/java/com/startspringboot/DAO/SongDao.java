package com.startspringboot.DAO;


import com.startspringboot.model.Song;
import com.sun.xml.internal.bind.v2.model.core.ID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface SongDao extends JpaRepository<Song, String> {
    public Song getSongById(int id);
    public Song deleteSongById(int id);

}
