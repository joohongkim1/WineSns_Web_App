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

import com.ssafy.wine.repo.WineLikeRepository;
import com.ssafy.wine.dto.UserDto;
import com.ssafy.wine.dto.WineDto;
import com.ssafy.wine.entity.User;
import com.ssafy.wine.entity.Wine;
import com.ssafy.wine.entity.WineLike;
import com.ssafy.wine.repo.UserRepository;
import com.ssafy.wine.repo.WineRepository;

@Service
public class WineLikeServiceImpl implements WineLikeService {

	@Autowired
	private WineLikeRepository wineLikeRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private WineRepository wineRepository;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public WineLike create(Long uid, Long wid) {
		User user = userRepository.findById(uid).orElseThrow(NoSuchElementException::new);
		Wine wine = wineRepository.findById(wid).orElseThrow(NoSuchElementException::new);
		return wineLikeRepository.save(WineLike.builder().user(user).wine(wine).build());
	}

	@Override
	@Transactional
	public void delete(Long uid, Long wid) {
		User user = userRepository.findById(uid).orElseThrow(NoSuchElementException::new);
		Wine wine = wineRepository.findById(wid).orElseThrow(NoSuchElementException::new);
		wineLikeRepository.delete(WineLike.builder().user(user).wine(wine).build());
	}
	
	@Override
	@Transactional
	public void updateLikeNum(Long wid) {
		Wine wine = wineRepository.findById(wid).orElseThrow(NoSuchElementException::new);
		wineRepository.updateLikeNum(wid, wine.getWineLikes().size());
	}

	@Override
	public List<WineDto> findByUser(Long uid) {
		User user = userRepository.findById(uid).orElseThrow(NoSuchElementException::new);
		List<Wine> wines = new ArrayList<>();
		for (WineLike like : user.getWineLikes()) {
			System.out.println(like.getWine().getWid() + " : " + like.getWine().getNameKor());
			wines.add(like.getWine());
		}		
		Type typeToken =  new TypeToken<List<WineDto>>() {}.getType();
		List<WineDto> wineDtos = modelMapper.map(wines, typeToken);
		return wineDtos;
	}

	@Override
	public List<UserDto> findByWine(Long wid) {
		Wine wine = wineRepository.findById(wid).orElseThrow(NoSuchElementException::new);
		List<User> users = new ArrayList<>();
		for (WineLike like : wine.getWineLikes()) {
			System.out.println(like.getUser().getEmail());
			users.add(like.getUser());
		}
		Type typeToken =  new TypeToken<List<UserDto>>() {}.getType();
		List<UserDto> userDtos = modelMapper.map(users, typeToken);
		return userDtos;
	}
}
