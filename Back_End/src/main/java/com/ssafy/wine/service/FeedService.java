package com.ssafy.wine.service;

import java.util.List;

import com.ssafy.wine.dto.Feed;

public interface FeedService {

	public Feed create(Long uid, Long wid, String content);
	public void delete(Long fid);
	public List<Feed> findByWine(Long wid);
	public List<Feed> findByUser(Long uid);
	
}
