package com.project.dao;

import com.project.others.StudentChapter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentChapterDao extends JpaRepository<StudentChapter, Long> {
}
