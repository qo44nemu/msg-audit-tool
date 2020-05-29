package com.amos2020.javabackend.repository;

import com.amos2020.javabackend.entity.AuditContactPerson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AuditContactPersonRepository extends JpaRepository<AuditContactPerson, Integer> {
    @Modifying
    @Query("delete from AuditContactPerson a where a.auditId=:auditId")
    void deleteByAuditId(@Param("auditId") int auditId);
}