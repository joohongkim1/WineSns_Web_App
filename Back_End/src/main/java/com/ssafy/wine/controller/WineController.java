package com.ssafy.wine.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.wine.dto.WineDto;
import com.ssafy.wine.enums.WineFindEnum;
import com.ssafy.wine.enums.WineRankEnum;
import com.ssafy.wine.service.WineService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@Api(tags = { "3. Wine" })
@RequestMapping(value = "/wine")
@CrossOrigin(origins = "*")
public class WineController {

	@Autowired
	private WineService wineService;

	@ApiOperation(value = "와인 목록 - 정렬 출력")
	@GetMapping("/readAll/{type}")
	public ResponseEntity<Object> readAll(@PathVariable WineFindEnum type) {
		try {
			List<WineDto> wines = wineService.findAll(type);
			return new ResponseEntity<Object>(wines, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "와인랭크 - 조회수,좋아요")
	@GetMapping("/readRank/{type}")
	public ResponseEntity<Object> readRank(@PathVariable WineRankEnum type) {
		try {
			List<WineDto> wines = wineService.findTop10(type);
			return new ResponseEntity<Object>(wines, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "와인 번호 검색 - 개별선택할때")
	@GetMapping("/readByWid/{wid}")
	public ResponseEntity<Object> readByWid(@PathVariable Long wid) {
		try {
			WineDto wine = wineService.findByWid(wid);
			return new ResponseEntity<Object>(wine, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "와인 이름 검색")
	@GetMapping("/readByName/{name}")
	public ResponseEntity<Object> readByName(@PathVariable String name) {
		try {
			List<WineDto> wines = wineService.searchByName(name);
			return new ResponseEntity<Object>(wines, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "와인 필터 검색 - type, sparkling, country, sweet")
	@GetMapping("/search")
	public ResponseEntity<Object> search(@RequestParam(required = false) String type, @RequestParam(required = false) Boolean sparkling,
			@RequestParam(required = false) String country, @RequestParam(required = false) Integer sweet) {
		try {
			List<WineDto> wines = wineService.search(type, sparkling, country, sweet);
			return new ResponseEntity<Object>(wines, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "해당 와인 조회수 ++")
	@PutMapping("/updateVisit/{wid}")
	public ResponseEntity<Object> updateVisit(@PathVariable Long wid) {
		try {
			Integer result = wineService.updateVisit(wid);
			if (result != null) {
				return new ResponseEntity<Object>(result, HttpStatus.OK);
			} else {
				return new ResponseEntity<Object>(result, HttpStatus.NOT_ACCEPTABLE);
			}
		} catch (Exception e) {
			throw e;
		}
	}
}
