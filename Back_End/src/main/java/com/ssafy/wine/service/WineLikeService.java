package com.ssafy.wine.service;

import java.util.List;

import com.ssafy.wine.entity.User;
import com.ssafy.wine.entity.Wine;
import com.ssafy.wine.entity.WineLike;

public interface WineLikeService {
	
	public WineLike create(Long uid, Long wid);
	public void updateLikeNum(Long wid);
	public void delete(Long uid, Long wid);
	public List<Wine> findByUser(Long uid);
	public List<User> findByWine(Long wid);
	
}
