/*
 * Copyright (c) 2019.
 * Developed by John Tumminelli
 * Tummsmedia, LLC
 */

package com.tummsmedia.notes2.Entities;

import com.tummsmedia.notes2.LocalDateTimeAttributeConverter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "notes")
public class Note {

    @Id
    @GeneratedValue
    private int noteId;


    @Column
    @Convert(converter = LocalDateTimeAttributeConverter.class)
    private LocalDateTime dateTime;

    @Column
    private String noteContent;

    public Note() {
    }


    public Note(int noteId, LocalDateTime dateTime, String noteContent) {
        this.noteId = noteId;
        this.dateTime = dateTime;
        this.noteContent = noteContent;


    }

    public int getNoteId() {
        return noteId;
    }

    public void setNoteId(int noteId) {
        this.noteId = noteId;
    }

    public String getNoteContent() {
        return noteContent;
    }

    public void setNoteContent(String noteContent) {
        this.noteContent = noteContent;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

}
