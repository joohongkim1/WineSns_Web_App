package com.ssafy.wine.service;

import java.util.List;

import com.ssafy.wine.dto.WineDto;
import com.ssafy.wine.enums.WineCountryEnum;
import com.ssafy.wine.enums.WineFindEnum;
import com.ssafy.wine.enums.WineRankEnum;

public interface WineService {

	public List<WineDto> findAll(WineFindEnum type);

	public List<WineDto> findRank(WineRankEnum type);

	public WineDto findByWid(Long wid);

	public List<WineDto> searchByName(String name);

	public List<WineDto> search(String type, Boolean sparkling, WineCountryEnum[] country, String[] winery,
			Integer sweet);

	public Integer updateVisit(Long wid);

	public List<String> findWineryAll();

	public List<String> findWineryByCountry(WineCountryEnum country);

}
