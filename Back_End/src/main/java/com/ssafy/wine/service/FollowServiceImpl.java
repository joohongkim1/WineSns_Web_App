package com.ssafy.wine.service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.wine.dto.Follow;
import com.ssafy.wine.dto.User;
import com.ssafy.wine.repo.FollowRepository;
import com.ssafy.wine.repo.UserRepository;

@Service
public class FollowServiceImpl implements FollowService {

	@Autowired
	private FollowRepository followRepository;

	@Autowired
	private UserRepository userRepository;

	@Override
	@Transactional
	public Follow create(Long fromUid, Long toUid) {
		User from = userRepository.findById(fromUid).orElseThrow(NoSuchElementException::new);
		User to = userRepository.findById(toUid).orElseThrow(NoSuchElementException::new);
		return followRepository.save(new Follow(from, to));
	}

	@Override
	@Transactional
	public void delete(Long fromUid, Long toUid) {
		User from = userRepository.findById(fromUid).orElseThrow(NoSuchElementException::new);
		User to = userRepository.findById(toUid).orElseThrow(NoSuchElementException::new);
		followRepository.delete(new Follow(from, to));
	}

	@Override
	@Transactional
	public List<User> findByFollowing(Long fromUid) {
		User from = userRepository.findById(fromUid).orElseThrow(NoSuchElementException::new);
		List<User> following = new ArrayList<>();
		for (Follow follow : from.getFollowing()) {
			following.add(follow.getTo());
		}
		return following;
	}

	@Override
	@Transactional
	public List<User> findByFollower(Long toUid) {
		User to = userRepository.findById(toUid).orElseThrow(NoSuchElementException::new);
		List<User> follower = new ArrayList<>();
		for (Follow follow : to.getFollower()) {
			follower.add(follow.getFrom());
		}
		return follower;
	}

}
