package com.ssafy.wine.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import com.ssafy.wine.advice.exception.CUserNotFoundException;
import com.ssafy.wine.repo.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class MyUserDetailService implements UserDetailsService {

	private final UserRepository userRepository;

	public UserDetails loadUserByUsername(String userPk) {
		return userRepository.findById(Long.valueOf(userPk)).orElseThrow(CUserNotFoundException::new);
	}
}