package com.ssafy.wine.service;

import java.util.List;

import com.ssafy.wine.entity.Wine;

public interface WineService {

	public List<Wine> readAll(Integer sort);
	public List<Wine> readTop10(Integer sort);
	public Wine readByWid(Long wid);
	public List<Wine> readByName(String name);
	public List<Wine> search(String type, Boolean sparkling, String country, Integer sweet);
	public Integer updateVisit(Long wid);
	
}
