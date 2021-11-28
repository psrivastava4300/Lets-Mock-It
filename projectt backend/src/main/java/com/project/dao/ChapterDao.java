package com.project.dao;

import com.project.others.Chapter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChapterDao extends JpaRepository<Chapter, Long> {
}
