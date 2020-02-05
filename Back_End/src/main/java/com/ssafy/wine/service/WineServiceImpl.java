package com.ssafy.wine.service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.wine.entity.Wine;
import com.ssafy.wine.repo.WineRepository;

@Service
public class WineServiceImpl implements WineService {

	@Autowired
	private WineRepository wineRepository;
	
	@Override
	@Transactional
	public List<Wine> readAll(Integer sort) {
		List<Wine> wines = new ArrayList<>();
		switch (0) {
		case 0:
			wines = wineRepository.findAllByOrderByNameKorAsc();
			break;
		case 1:
			wines = wineRepository.findAllByOrderByNameEngAsc();
			break;
		case 2:
			wines = wineRepository.findAllByOrderByVisitDesc();
			break;
		case 3:
			wines = wineRepository.findAllByOrderByLikeNumDesc();
			break;
		default:
			break;
		}
		return wines;
	}

	@Override
	@Transactional
	public List<Wine> readTop10(Integer sort) {
		List<Wine> wines = new ArrayList<>();
		switch (sort) {
		case 0:
			wines = wineRepository.findTop3ByOrderByVisitDesc();
			break;
		case 1:
			wines = wineRepository.findTop10ByOrderByVisitDesc();
			break;
		case 2:
			wines = wineRepository.findTop3ByOrderByLikeNumDesc();
			break;
		case 3:
			wines = wineRepository.findTop10ByOrderByLikeNumDesc();
			break;
		default:
			break;
		}
		return wines;
	}

	@Override
	@Transactional
	public Wine readByWid(Long wid) {
		wineRepository.updateVisit(wid);
		return wineRepository.findById(wid).orElseThrow(NoSuchElementException::new);
	}

	@Override
	@Transactional
	public List<Wine> readByName(String name) {
		List<Wine> wines = wineRepository.findByNameKorLike("%" + name + "%");
		wines.addAll(wineRepository.findByNameEngLike("%" + name + "%"));
		return wines;
	}
	@Override
	@Transactional
	public List<Wine> search(String type, Boolean sparkling, String country, Integer sweet) {
		List<Wine> wines = new ArrayList<>();
		wineRepository.findAll(wineRepository.search(type, sparkling, country, sweet)).forEach(wines::add);
		return wines;
	}
	@Override
	@Transactional
	public Integer updateVisit(Long wid) {
		return wineRepository.updateVisit(wid);
	}
}
