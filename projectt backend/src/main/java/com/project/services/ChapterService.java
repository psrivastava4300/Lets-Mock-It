package com.project.services;

import com.project.others.Chapter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
@Component
public interface ChapterService {
    @Autowired
    Chapter addChapter(Chapter chapter);
}