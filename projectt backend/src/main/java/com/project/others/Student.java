package com.project.others;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class Student {
    @Id
    @GeneratedValue
    @Column(name="id", unique = true)
    public Long id;

    @Column(name="name")
    public String name;

    @Column(name="email", unique = true)
    public String email;

    @Column(name="password")
    public String password;
}
