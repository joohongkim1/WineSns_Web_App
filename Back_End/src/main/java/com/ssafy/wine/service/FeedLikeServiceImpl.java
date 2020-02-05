package com.ssafy.wine.service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.wine.dto.Feed;
import com.ssafy.wine.dto.FeedLike;
import com.ssafy.wine.dto.User;
import com.ssafy.wine.repo.FeedLikeRepository;
import com.ssafy.wine.repo.FeedRepository;
import com.ssafy.wine.repo.UserRepository;

@Service
public class FeedLikeServiceImpl implements FeedLikeService {

	@Autowired
	private FeedLikeRepository feedLikeRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private FeedRepository feedRepostitory;

	@Override
	@Transactional
	public FeedLike create(Long uid, Long fid) {
		User user = userRepository.findById(uid).orElseThrow(NoSuchElementException::new);
		Feed feed = feedRepostitory.findById(fid).orElseThrow(NoSuchElementException::new);
		return feedLikeRepository.save(new FeedLike(user, feed));
	}

	@Override
	@Transactional
	public void delete(Long uid, Long fid) {
		User user = userRepository.findById(uid).orElseThrow(NoSuchElementException::new);
		Feed feed = feedRepostitory.findById(fid).orElseThrow(NoSuchElementException::new);
		feedLikeRepository.delete(new FeedLike(user, feed));
	}

	@Override
	@Transactional
	public void updateLikeNum(Long fid) {
		Feed feed = feedRepostitory.findById(fid).orElseThrow(NoSuchElementException::new);
		feedRepostitory.updateLikeNum(fid, feed.getFeedLikes().size());
	}

	@Override
	@Transactional
	public List<Feed> findByUser(Long uid) {
		User user = userRepository.findById(uid).orElseThrow(NoSuchElementException::new);
		List<Feed> feeds = new ArrayList<>();
		for (FeedLike like : user.getFeedLikes()) {
			feeds.add(like.getFeed());
		}
		return feeds;
	}

	@Override
	@Transactional
	public List<User> findByFeed(Long fid) {
		Feed feed = feedRepostitory.findById(fid).orElseThrow(NoSuchElementException::new);
		List<User> users = new ArrayList<>();
		for (FeedLike like : feed.getFeedLikes()) {
			users.add(like.getUser());
		}
		return users;
	}

}
