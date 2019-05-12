/*
 * Copyright (c) 2019.
 * Developed by John Tumminelli
 * Tummsmedia, LLC
 */

package com.tummsmedia.notes2.Controllers;

import com.tummsmedia.notes2.Entities.Note;
import com.tummsmedia.notes2.Services.NotesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

import static org.springframework.http.HttpStatus.NOT_FOUND;
import static org.springframework.http.HttpStatus.OK;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class NoteController {

    @Autowired
    NotesRepo notes;

    @RequestMapping(value = "/api/v1/notes", method = RequestMethod.GET)
    private ResponseEntity<Object> getAllNotes() {
        if (notes.findAll().isEmpty()) {
            HashMap<String, String> hm = new HashMap();
            hm.put("result", "no results found");
            return new ResponseEntity<>(hm, NOT_FOUND);
        }
        else {
            return new ResponseEntity<>(notes.findAll(), OK);
        }
    }

    @RequestMapping(value = "/api/v1/notes/{id}", method = RequestMethod.GET)
    private ResponseEntity<Object> getOneNote(@PathVariable("id")int noteId) {
        if (notes.findFirstByNoteId(noteId) == null) {
            HashMap<String, String> hm = new HashMap();
            hm.put("result", "does not exist");
            return new ResponseEntity<>(hm, NOT_FOUND);
        }
        else {
            Note note = notes.findFirstByNoteId(noteId);
            return new ResponseEntity<>(note , OK);
        }
    }

    @RequestMapping(value = "api/v1/notes/{id}", method = RequestMethod.DELETE)
    private ResponseEntity<Object> deleteNote(@PathVariable("id")int noteId) {
        if (notes.findFirstByNoteId(noteId) == null) {
            HashMap<String, String> hm = new HashMap();
            hm.put("result", "does not exist");
            return new ResponseEntity<>(hm, NOT_FOUND);
        }
        else {
            notes.deleteById(noteId);
            return new ResponseEntity<>(OK);
        }
    }

    @RequestMapping(value = "/api/v1/notes", method = RequestMethod.POST)
    private ResponseEntity<Object> addNote(@RequestBody Note note){
        notes.save(note);
        return new ResponseEntity<>(note, OK);
    }

}
