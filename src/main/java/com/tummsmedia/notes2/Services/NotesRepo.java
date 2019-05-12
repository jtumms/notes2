/*
 * Copyright (c) 2019.
 * Developed by John Tumminelli
 * Tummsmedia, LLC
 */

package com.tummsmedia.notes2.Services;

import com.tummsmedia.notes2.Entities.Note;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface NotesRepo extends CrudRepository<Note,Integer> {
    List<Note> findAll();
    Note findFirstByNoteId(int noteId);

}
