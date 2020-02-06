package com.ssafy.wine.service;

import java.lang.reflect.Type;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.wine.dto.FeedDto;
import com.ssafy.wine.entity.Feed;
import com.ssafy.wine.entity.User;
import com.ssafy.wine.entity.Wine;
import com.ssafy.wine.enums.FeedRankEnum;
import com.ssafy.wine.repo.FeedRepository;
import com.ssafy.wine.repo.UserRepository;
import com.ssafy.wine.repo.WineRepository;

@Service
public class FeedServiceImpl implements FeedService {

	@Autowired
	private FeedRepository feedRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private WineRepository wineRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public Feed create(Long uid, Long wid, BigDecimal rating, String content) {
		User user = userRepository.findById(uid).orElseThrow(NoSuchElementException::new);
		Feed feed;
		if (wid == null || rating == null) {
			feed = new Feed(user, content);
		} else {
			Wine wine = wineRepository.findById(wid).orElseThrow(NoSuchElementException::new);
			feed = new Feed(user, wine, rating, content);
		}
		return feedRepository.save(feed);
	}

	@Override
	@Transactional
	public void delete(Long fid) {
		feedRepository.deleteById(fid);
	}

	@Override
	public List<FeedDto> findByWine(Long wid) {
		Wine wine = wineRepository.findById(wid).orElseThrow(NoSuchElementException::new);
		List<Feed> feeds = wine.getFeeds();
		Type typeToken = new TypeToken<List<FeedDto>>() {
		}.getType();
		List<FeedDto> feedDtos = modelMapper.map(feeds, typeToken);
		return feedDtos;
	}

	@Override
	public List<FeedDto> findByUser(Long uid) {
		User user = userRepository.findById(uid).orElseThrow(NoSuchElementException::new);
		List<Feed> feeds = user.getFeeds();
		Type typeToken = new TypeToken<List<FeedDto>>() {
		}.getType();
		List<FeedDto> feedDtos = modelMapper.map(feeds, typeToken);
		return feedDtos;
	}

	@Override
	public List<FeedDto> findTop10(FeedRankEnum type) {
		List<Feed> feeds = new ArrayList<>();
		switch (type) {
		case VISIT_10:
			feeds = feedRepository.findTop10ByRatingNotNullOrderByVisitDesc();
			break;
		case LIKE_10:
			feeds = feedRepository.findTop10ByRatingNotNullOrderByLikeNumDesc();
			break;
		default:
			break;
		}
		Type typeToken = new TypeToken<List<FeedDto>>() {
		}.getType();
		List<FeedDto> feedDtos = modelMapper.map(feeds, typeToken);
		return feedDtos;
	}

	@Override
	@Transactional
	public Integer update(Long fid, Long wid, BigDecimal rating, String content) {
		return feedRepository.updateFeed(fid, wid, rating, content);
	}

	@Override
	@Transactional
	public Integer updateVisit(Long fid) {
		return feedRepository.updateVisit(fid);
	}

}
