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
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.wine.dto.Wine;
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

	@ApiOperation(value = "와인 목록, 0:한글오름, 1:영어오름, 2:방문내림, 3:좋아요내림")
	@GetMapping("/readAll/{sort}")
	public ResponseEntity<Object> readAll(@PathVariable Integer sort) {
		try {
			List<Wine> wines = wineService.readAll(sort);
			return new ResponseEntity<Object>(wines, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "와인 top10, 0:조회수, 1:좋아요")
	@GetMapping("/readTop10/{sort}")
	public ResponseEntity<Object> readTop10(@PathVariable Integer sort) {
		try {
			List<Wine> wines = wineService.readTop10(sort);
			return new ResponseEntity<Object>(wines, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "와인 번호 검색, 개별선택")
	@GetMapping("/readByWid/{wid}")
	public ResponseEntity<Object> readByWid(@PathVariable Long wid) {
		try {
			Wine wine = wineService.readByWid(wid);
			return new ResponseEntity<Object>(wine, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "와인 이름 검색")
	@GetMapping("/readByName/{name}")
	public ResponseEntity<Object> readByName(@PathVariable String name) {
		try {
			List<Wine> wines = wineService.readByName(name);
			return new ResponseEntity<Object>(wines, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "와인 필터 검색 - type, sparkling, country, sweet")
	@GetMapping("/search")
	public ResponseEntity<Object> search(String type, Boolean sparkling, String country, Integer sweet) {
		try {
			List<Wine> wines = wineService.search(type, sparkling, country, sweet);
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
