package com.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.others.User;

/* this the user  Repository interface  */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    public User findOneByUsername(String username);
}
