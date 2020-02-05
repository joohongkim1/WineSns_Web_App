package com.ssafy.wine.service;

import java.util.List;

import com.ssafy.wine.entity.Follow;
import com.ssafy.wine.entity.User;

public interface FollowService {

	public Follow create(Long fromUid, Long toUid);
	public void delete(Long fromUid, Long toUid);
	public List<User> findByFollowing(Long fromUid);
	public List<User> findByFollower(Long toUid);
	
}
