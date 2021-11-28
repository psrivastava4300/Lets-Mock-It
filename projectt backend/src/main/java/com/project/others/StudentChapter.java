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
public class StudentChapter {
    @Id
    @GeneratedValue
    @Column(name="id", unique = true)
    public Long id;

    @Column(name="cid")
    public Long cId;

    @Column(name="sid")
    public Long sId;
}
