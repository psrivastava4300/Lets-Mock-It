package com.project.others;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;

@Data
@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class Chapter {

    @Id
    @GeneratedValue
    @Column(name="id")
    public Long id;

    @Column(name="title")
    public String title;

    @Column(name="description")
    public String description;

    @Column(name = "qid")
    public Long qId;

    @Column(name = "tid")
    public Long tId;

}
