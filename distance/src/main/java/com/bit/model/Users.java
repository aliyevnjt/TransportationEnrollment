package com.bit.model;

import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;
import java.util.Date;

/**
 * @author ykeskin
 * @since 5/2/2021
 */
@Data
@Slf4j
@Entity
@Table(name = "users", schema = "transportation")
public class Users {

    public enum RoleType {

        SUPER_ADMIN(1),
        DISTRICT_ADMIN(2),
        SCHOOL_ADMIN(3);

        private final int roleCode;

        RoleType(int roleCode) {
            this.roleCode = roleCode;
        }

        public static RoleType getRoleType(int roleCode) {
            for (RoleType roleType : RoleType.values()) {
                if (roleType.roleCode == roleCode)
                    return roleType;
            }
            log.error("ERROR! Role Cd:" + roleCode + " did not return any value");
            return null;
        }

    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private int id;

    @Size(min=1, max=4)
    private String adminYear;

    @Size(min=1, max=4)
    private String activeInd;

    @Transient
    @Enumerated(EnumType.STRING)
    @Getter(AccessLevel.NONE)
    private RoleType roleType;

    public String getRoleType() {
        return RoleType.getRoleType(this.roleCode).name();
    }


    @Min(1)
    @Max(9)
    private int roleCode;

    @Size(min=1, max=50)
    private String district;

    @Size(min=1, max=50)
    private String firstName;

    @Size(min=1, max=50)
    private String lastName;

    @Size(min=1, max=50)
    private String email;

    @Size(min=1, max=50)
    private String school;

    private Date create_date;

    private Date update_date;


}
