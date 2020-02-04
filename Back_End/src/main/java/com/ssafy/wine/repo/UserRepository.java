package com.ssafy.wine.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.wine.dto.User;

// Database에 접근
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByEmail(String email);

	@Transactional
	@Modifying
	@Query(value = "UPDATE user u set u.emailcertify = 'Y' where u.email = :email", nativeQuery = true)
	Integer updateEmail(@Param("email") String email);

}