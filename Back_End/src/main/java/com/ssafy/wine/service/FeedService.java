package com.ssafy.wine.service;

import java.math.BigDecimal;
import java.util.List;

import com.ssafy.wine.entity.Feed;

public interface FeedService {

	public Feed create(Long uid, Long wid, BigDecimal rating, String content);

	public void delete(Long fid);

	public Integer update(Long fid, Long wid, BigDecimal rating, String content);

	public List<Feed> findByWine(Long wid);

	public List<Feed> findByUser(Long uid);
	
	public List<Feed> readTop10(Integer sort);

	public Integer updateVisit(Long fid);

}
