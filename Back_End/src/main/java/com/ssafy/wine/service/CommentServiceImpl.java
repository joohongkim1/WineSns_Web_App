package com.ssafy.wine.service;

import java.lang.reflect.Type;
import java.util.List;
import java.util.NoSuchElementException;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.wine.dto.CommentDto;
import com.ssafy.wine.entity.Comment;
import com.ssafy.wine.entity.Feed;
import com.ssafy.wine.entity.User;
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

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public Comment create(Long fid, Long uid, Long cid, String content) {
		Feed feed = feedRepository.findById(fid).orElseThrow(NoSuchElementException::new);
		User user = userRepository.findById(uid).orElseThrow(NoSuchElementException::new);
		Comment comment;
		if (cid != null) {
			Comment reCid = commentRepository.findById(cid).orElseThrow(NoSuchElementException::new);
			comment = new Comment(user, feed, content, reCid);
		} else {
			comment = new Comment(user, feed, content);
		}
		return commentRepository.save(comment);
	}

	@Override
	public List<CommentDto> findByFeed(Long fid) {
		Feed feed = feedRepository.findById(fid).orElseThrow(NoSuchElementException::new);
		Type typeToken = new TypeToken<List<CommentDto>>() {}.getType();
		return modelMapper.map(feed.getComments(), typeToken);
	}

	@Override
	@Transactional
	public Integer update(Long cid, String content) {
		return commentRepository.updateFeed(cid, content);
	}
	
	@Override
	@Transactional
	public void delete(Long cid) {
		commentRepository.deleteById(cid);
	}

}
