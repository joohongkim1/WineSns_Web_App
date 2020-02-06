package com.ssafy.wine.service;

import java.util.List;

import com.ssafy.wine.dto.WineDto;
import com.ssafy.wine.enums.WineFindEnum;
import com.ssafy.wine.enums.WineRankEnum;
public interface WineService {

	public List<WineDto> findAll(WineFindEnum type);

	public List<WineDto> findTop10(WineRankEnum type);

	public WineDto findByWid(Long wid);

	public List<WineDto> searchByName(String name);

	public List<WineDto> search(String type, Boolean sparkling, String country, Integer sweet);

	public Integer updateVisit(Long wid);

}
