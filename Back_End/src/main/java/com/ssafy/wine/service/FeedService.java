package com.ssafy.wine.service;

import java.math.BigDecimal;
import java.util.List;

import com.ssafy.wine.dto.FeedDto;
import com.ssafy.wine.entity.Feed;
import com.ssafy.wine.enums.FeedRankEnum;

public interface FeedService {

	public Feed create(Long uid, Long wid, BigDecimal rating, String content);

	public void delete(Long fid);

	public Integer update(Long fid, Long wid, BigDecimal rating, String content);

	public List<FeedDto> findByWine(Long wid);

	public List<FeedDto> findByUser(Long uid);
	
	public List<FeedDto> findTop10(FeedRankEnum type);

	public Integer updateVisit(Long fid);

}
