package com.ssafy.wine.service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.wine.entity.Feed;
import com.ssafy.wine.entity.User;
import com.ssafy.wine.entity.Wine;
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

	@Override
	@Transactional
	public Feed create(Long uid, Long wid, BigDecimal rating, String content) {
		User user = userRepository.findById(uid).orElseThrow(NoSuchElementException::new);
		Feed feed;
		if (wid == null) {
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
	@Transactional
	public List<Feed> findByWine(Long wid) {
		Wine wine = wineRepository.findById(wid).orElseThrow(NoSuchElementException::new);
		List<Feed> feeds = wine.getFeeds();
		return feeds;
	}

	@Override
	@Transactional
	public List<Feed> findByUser(Long uid) {
		User user = userRepository.findById(uid).orElseThrow(NoSuchElementException::new);
		List<Feed> feeds = user.getFeeds();
		return feeds;
	}
	
	@Transactional
	public List<Feed> readTop10(Integer sort) {
		List<Feed> feeds = new ArrayList<>();
		switch (sort) {
		case 0:
			feeds = feedRepository.findTop10ByRatingNotNullOrderByVisitDesc();
			break;
		case 1:
			feeds = feedRepository.findTop10ByRatingNotNullOrderByLikeNumDesc();
			break;
		case 2:
			feeds = feedRepository.findByRatingNotNull();
			break;
		default:
			break;
		}
		return feeds;
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
