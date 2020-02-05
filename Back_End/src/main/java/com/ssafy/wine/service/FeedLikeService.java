package com.ssafy.wine.service;

import java.util.List;

import com.ssafy.wine.entity.Feed;
import com.ssafy.wine.entity.FeedLike;
import com.ssafy.wine.entity.User;

public interface FeedLikeService {

	public FeedLike create(Long uid, Long fid);
	public void updateLikeNum(Long fid);
	public void delete(Long uid, Long fid);
	public List<Feed> findByUser(Long uid);
	public List<User> findByFeed(Long fid);
	
}
