package com.ssafy.wine.service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.wine.dto.WineLike;
import com.ssafy.wine.dto.User;
import com.ssafy.wine.dto.Wine;
import com.ssafy.wine.repo.WineLikeRepository;
import com.ssafy.wine.repo.UserRepository;
import com.ssafy.wine.repo.WineRepository;

import io.jsonwebtoken.lang.Arrays;

@Service
public class WineLikeServiceImpl implements WineLikeService {

	@Autowired
	private WineLikeRepository wineLikeRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private WineRepository wineRepository;

	@Override
	@Transactional
	public WineLike create(Long uid, Long wid) {
		User user = userRepository.findById(uid).orElseThrow(NoSuchElementException::new);
		Wine wine = wineRepository.findById(wid).orElseThrow(NoSuchElementException::new);
		return wineLikeRepository.save(new WineLike(user, wine));
	}

	@Override
	@Transactional
	public void delete(Long uid, Long wid) {
		User user = userRepository.findById(uid).orElseThrow(NoSuchElementException::new);
		Wine wine = wineRepository.findById(wid).orElseThrow(NoSuchElementException::new);
		wineLikeRepository.delete(new WineLike(user, wine));
	}
	
	@Override
	@Transactional
	public void updateLikeNum(Long wid) {
		Wine wine = wineRepository.findById(wid).orElseThrow(NoSuchElementException::new);
		wineRepository.updateLikeNum(wid, wine.getWineLikes().size());
	}


	@Override
	@Transactional
	public List<Wine> findByUser(Long uid) {
		User user = userRepository.findById(uid).orElseThrow(NoSuchElementException::new);
		List<Wine> wines = new ArrayList<>();
		for (WineLike like : user.getWineLikes()) {
			System.out.println(like.getWine().getWid() + " : " + like.getWine().getNameKor());
			wines.add(like.getWine());
		}
		return wines;
	}

	@Override
	@Transactional
	public List<User> findByWine(Long wid) {
		Wine wine = wineRepository.findById(wid).orElseThrow(NoSuchElementException::new);
		List<User> users = new ArrayList<>();
		for (WineLike like : wine.getWineLikes()) {
			System.out.println(like.getUser().getEmail());
			users.add(like.getUser());
		}
		return users;
	}
}
