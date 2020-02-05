package com.ssafy.wine.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.NoSuchElementException;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.wine.dto.Comment;
import com.ssafy.wine.dto.Feed;
import com.ssafy.wine.dto.User;
import com.ssafy.wine.repo.CommentRepository;
import com.ssafy.wine.repo.FeedRepository;
import com.ssafy.wine.repo.UserRepository;

@Service
public class CommentServiceImpl implements CommentService {

	@Autowired
	private CommentRepository commentRepository;

	@Autowired
	private FeedRepository feedRepository;

	@Autowired
	private UserRepository userRepository;

	@Transactional
	public Comment create(Long fid, Long uid, String content) {
		Feed feed = feedRepository.findById(fid).orElseThrow(NoSuchElementException::new);
		User user = userRepository.findById(uid).orElseThrow(NoSuchElementException::new);
		Comment comment = new Comment(user, feed, content, LocalDateTime.now());
		return commentRepository.save(comment);
	}

	@Transactional
	public Comment create(Long fid, Long uid, Long cid, String content) {
		Feed feed = feedRepository.findById(fid).orElseThrow(NoSuchElementException::new);
		User user = userRepository.findById(uid).orElseThrow(NoSuchElementException::new);
		Comment reComment = commentRepository.findById(cid).orElseThrow(NoSuchElementException::new);
		Comment comment = new Comment(user, feed, content, LocalDateTime.now(), reComment);
		return commentRepository.save(comment);
	}

	@Transactional
	public void delete(Long cid) {
		commentRepository.deleteById(cid);
	}

	@Transactional
	public List<Comment> findByFeed(Long fid) {
		Feed feed = feedRepository.findById(fid).orElseThrow(NoSuchElementException::new);
		System.out.println(feed.getComments().size());
		return feed.getComments();
	}

}
