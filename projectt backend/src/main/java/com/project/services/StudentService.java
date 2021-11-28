package com.project.services;

import com.project.others.Student;
import org.springframework.stereotype.Service;

@Service
public interface StudentService {
    Student addStudent(Student student);
}
