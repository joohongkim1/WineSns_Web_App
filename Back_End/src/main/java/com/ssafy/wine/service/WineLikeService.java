package com.ssafy.wine.service;

import java.util.List;

import com.ssafy.wine.dto.UserDto;
import com.ssafy.wine.dto.WineDto;
import com.ssafy.wine.entity.WineLike;

public interface WineLikeService {
	
	public WineLike create(Long uid, Long wid);
	public void updateLikeNum(Long wid);
	public void delete(Long uid, Long wid);
	public List<WineDto> findByUser(Long uid);
	public List<UserDto> findByWine(Long wid);
	
}
