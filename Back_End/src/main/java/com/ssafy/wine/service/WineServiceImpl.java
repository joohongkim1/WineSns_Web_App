package com.ssafy.wine.service;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.wine.dto.WineDto;
import com.ssafy.wine.entity.Wine;
import com.ssafy.wine.enums.WineFindEnum;
import com.ssafy.wine.enums.WineRankEnum;
import com.ssafy.wine.repo.WineRepository;

@Service
public class WineServiceImpl implements WineService {

	@Autowired
	private WineRepository wineRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<WineDto> findAll(WineFindEnum type) {
		List<Wine> wines = new ArrayList<>();
		Type typeToken =  new TypeToken<List<WineDto>>() {}.getType();
		switch (type) {
		case KOR_UP:
			wines = wineRepository.findAllByOrderByNameKorAsc();
			break;
		case ENG_UP:
			wines = wineRepository.findAllByOrderByNameEngAsc();
			break;
		case VISIT_DOWN:
			wines = wineRepository.findAllByOrderByVisitDesc();
			break;
		case LIKE_DOWN:
			wines = wineRepository.findAllByOrderByLikeNumDesc();
			break;
		default:
			break;
		}

		List<WineDto> wineDtos = modelMapper.map(wines, typeToken);
		return wineDtos;
	}

	@Override
	public List<WineDto> findTop10(WineRankEnum type) {
		List<Wine> wines = new ArrayList<>();
		Type typeToken =  new TypeToken<List<WineDto>>() {}.getType();
		switch (type) {
		case VISIT_3:
			wines = wineRepository.findTop3ByOrderByVisitDesc();
			break;
		case VISIT_10:
			wines = wineRepository.findTop10ByOrderByVisitDesc();
			break;
		case LIKE_3:
			wines = wineRepository.findTop3ByOrderByLikeNumDesc();
			break;
		case LIKE_10:
			wines = wineRepository.findTop10ByOrderByLikeNumDesc();
			break;
		default:
			break;
		}
		List<WineDto> wineDtos = modelMapper.map(wines, typeToken);
		return wineDtos;
	}

	@Override
	public WineDto findByWid(Long wid) {
		Wine wine = wineRepository.findById(wid).orElseThrow(NoSuchElementException::new);
		WineDto wineDto = modelMapper.map(wine, WineDto.class);
		System.out.println(wineDto);
		return wineDto;
	}

	@Override
	public List<WineDto> searchByName(String name) {
		List<Wine> wines = wineRepository.findByNameKorLike("%" + name + "%");
		wines.addAll(wineRepository.findByNameEngLike("%" + name + "%"));
		Type typeToken =  new TypeToken<List<WineDto>>() {}.getType();
		List<WineDto> wineDtos = modelMapper.map(wines, typeToken);
		return wineDtos;
	}

	@Override
	public List<WineDto> search(String type, Boolean sparkling, String country, Integer sweet) {
		List<Wine> wines = new ArrayList<>();
		wineRepository.findAll(wineRepository.search(type, sparkling, country, sweet)).forEach(wines::add);
		Type typeToken =  new TypeToken<List<WineDto>>() {}.getType();
		List<WineDto> wineDtos = modelMapper.map(wines, typeToken);
		return wineDtos;
	}

	@Override
	@Transactional
	public Integer updateVisit(Long wid) {
		return wineRepository.updateVisit(wid);
	}
}
