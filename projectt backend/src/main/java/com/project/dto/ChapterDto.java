package com.project.dto;

public class ChapterDto {

    public Long id;
    public String title;
    public String description;
    public Long qId, tId;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    public Long getqId() {
        return qId;
    }
    public void setqId(Long id) {
        this.qId = id;
    }

    public Long gettId() {
        return tId;
    }
    public void settId(Long id) {
        this.tId = id;
    }
}
