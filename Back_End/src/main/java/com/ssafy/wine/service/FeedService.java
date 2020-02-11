package com.ssafy.wine.service;

import java.math.BigDecimal;
import java.util.List;

import com.ssafy.wine.dto.FeedDto;
import com.ssafy.wine.entity.Feed;
import com.ssafy.wine.enums.FeedRankEnum;
import com.ssafy.wine.enums.FeedReviewEnum;

public interface FeedService {

	public Feed create(Long uid, Long wid, BigDecimal rating, String content);

	public void delete(Long fid);

	public Integer update(Long fid, Long wid, BigDecimal rating, String content);
	
	public List<FeedDto> findByWine(Long wid, FeedReviewEnum type);

	public List<FeedDto> findByUser(Long uid, FeedReviewEnum type);
	
	public List<FeedDto> findRank(FeedRankEnum type);

	public Integer updateVisit(Long fid);

}
