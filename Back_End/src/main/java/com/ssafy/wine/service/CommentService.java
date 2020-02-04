package com.ssafy.wine.service;

import java.util.List;

import com.ssafy.wine.dto.Comment;

public interface CommentService {
	
	public Comment create(Long fid, Long uid, String content);
	public Comment create(Long fid, Long uid, Long cid, String content);
	public void delete(Long cid);
	public List<Comment> findByFeed(Long fid);
	
}
