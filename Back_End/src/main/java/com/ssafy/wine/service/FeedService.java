package com.ssafy.wine.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.NoSuchElementException;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.wine.dto.Feed;
import com.ssafy.wine.dto.User;
import com.ssafy.wine.dto.Wine;
import com.ssafy.wine.repo.FeedRepository;
import com.ssafy.wine.repo.UserRepository;
import com.ssafy.wine.repo.WineRepository;

@Service
public class FeedService {

	@Autowired
	private FeedRepository feedRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private WineRepository wineRepository;

	@Transactional
	public Feed create(Long uid, Long wid, String content) {
		User user = userRepository.findById(uid).orElseThrow(NoSuchElementException::new);
		Feed feed;
		if (wid != null) {
			Wine wine = wineRepository.findById(wid).orElseGet(null);
			feed = new Feed(user, wine, content, LocalDateTime.now());
		} else {
			feed = new Feed(user, content, LocalDateTime.now());
		}
		return feedRepository.save(feed);
	}

	@Transactional
	public void delete(Long fid) {
		feedRepository.deleteById(fid);
	}

	@Transactional
	public List<Feed> findByWine(Long wid) {
		Wine wine = wineRepository.findById(wid).orElseThrow(NoSuchElementException::new);
		List<Feed> feeds = wine.getFeeds();
		return feeds;
	}

	@Transactional
	public List<Feed> findByUser(Long uid) {
		User user = userRepository.findById(uid).orElseThrow(NoSuchElementException::new);
		List<Feed> feeds = user.getFeeds();
		return feeds;
	}

}
