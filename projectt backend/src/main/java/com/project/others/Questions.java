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
public class Questions {

    @Id
    @GeneratedValue
    @Column(name="id", unique = true)
    public Long id;

    @Column(name="cid")
    public Long cId;

    @Column(name="question")
    public String question;

    @Column(name="option1")
    public String option1;

    @Column(name="option2")
    public String option2;

    @Column(name="option3")
    public String option3;

    @Column(name="option4")
    public String option4;

    @Column(name="answer")
    public String answer;

}
