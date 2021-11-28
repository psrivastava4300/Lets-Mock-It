package com.project.dao;

import com.project.others.Questions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionsDao extends JpaRepository<Questions, Long> {
}
