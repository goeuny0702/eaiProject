package com.example.FinalSpringProject.form;

import lombok.Data;

@Data
public class ClassUserCreateForm {
    private String userID;
    private String userPW;
    private String userName;
    private String userTel;
    private String userAddress;
    private Integer userAuthority;
    private String userEmail;
    private Boolean userGender;
    private Long classID;


    private Long subjectId;

    private String authOpinion;
    private String interestJob;

}
