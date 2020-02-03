package com.ssafy.wine.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.wine.dto.User;

// Database에 접근
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByEmail(String email);
}