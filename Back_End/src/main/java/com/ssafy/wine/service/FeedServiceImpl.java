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

import com.google.common.collect.Lists;
import com.ssafy.wine.dto.FeedInputDto;
import com.ssafy.wine.dto.FeedOutputDto;
import com.ssafy.wine.entity.Feed;
import com.ssafy.wine.entity.User;
import com.ssafy.wine.entity.Wine;
import com.ssafy.wine.enums.FeedRankEnum;
import com.ssafy.wine.enums.FeedReviewEnum;
import com.ssafy.wine.repo.FeedRepository;
import com.ssafy.wine.repo.UserRepository;
import com.ssafy.wine.repo.WineRepository;

@Service
public class FeedServiceImpl implements FeedService {

	@Autowired
	private FeedRepository feedRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private WineRepository wineRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public Feed create(Long uid, FeedInputDto feedInput) {
		User user = userRepository.findById(uid).orElseThrow(NoSuchElementException::new);
		Wine wine = null;
		if (feedInput.getWid() != null)
			wine = wineRepository.findById(feedInput.getWid()).orElseThrow(NoSuchElementException::new);
		return feedRepository.save(new Feed(user, wine, feedInput.getRating(), feedInput.getTitle(), feedInput.getContent()));
	}

	@Override
	public List<FeedOutputDto> findAll(FeedReviewEnum type){
		List<Feed> feeds = new ArrayList<>();
		switch (type) {
		case ALL:
			feeds = Lists.newArrayList(feedRepository.findAll());
			break;
		case FEED:
			feeds = feedRepository.findByRatingNull();
			break;
		case REVIEW:
			feeds = feedRepository.findByRatingNotNull();
			break;
		default:
			break;
		}
		Type typeToken = new TypeToken<List<FeedOutputDto>>() {}.getType();
		return modelMapper.map(feeds, typeToken);
	}

	@Override
	public List<FeedOutputDto> findByWine(Long wid, FeedReviewEnum type) {
		Wine wine = wineRepository.findById(wid).orElseThrow(NoSuchElementException::new);
		List<Feed> feeds = new ArrayList<>();
		switch (type) {
		case ALL:
			feeds = wine.getFeeds();
			break;
		case FEED:
			feeds = feedRepository.findByWineAndRatingNull(wine);
			break;
		case REVIEW:
			feeds = feedRepository.findByWineAndRatingNotNull(wine);
			break;
		default:
			break;
		}
		Type typeToken = new TypeToken<List<FeedOutputDto>>() {}.getType();
		return modelMapper.map(feeds, typeToken);
	}

	@Override
	public List<FeedOutputDto> findByUser(Long uid, FeedReviewEnum type) {
		User user = userRepository.findById(uid).orElseThrow(NoSuchElementException::new);
		List<Feed> feeds = new ArrayList<>();
		switch (type) {
		case ALL:
			feeds = user.getFeeds();
			break;
		case FEED:
			feeds = feedRepository.findByUserAndRatingNull(user);
			break;
		case REVIEW:
			feeds = feedRepository.findByUserAndRatingNotNull(user);
			break;
		default:
			break;
		}
		Type typeToken = new TypeToken<List<FeedOutputDto>>() {}.getType();
		return modelMapper.map(feeds, typeToken);
	}

	@Override
	public List<FeedOutputDto> findRank(FeedRankEnum type) {
		List<Feed> feeds = new ArrayList<>();
		switch (type) {
		case LIKE_5:
			feeds = feedRepository.findTop5ByRatingNotNullOrderByVisitDesc();
			break;
		case VISIT_5:
			feeds = feedRepository.findTop5ByRatingNotNullOrderByLikeNumDesc();
			break;
		default:
			break;
		}
		Type typeToken = new TypeToken<List<FeedOutputDto>>() {}.getType();
		return modelMapper.map(feeds, typeToken);
	}

	@Override
	@Transactional
	public Integer update(Long fid, FeedInputDto feedInput) {
		Wine wine = wineRepository.findById(feedInput.getWid()).orElseThrow(NoSuchElementException::new);
		return feedRepository.updateFeed(fid, wine, feedInput.getRating(), feedInput.getTitle(), feedInput.getContent());
	}

	@Override
	@Transactional
	public Integer updateVisit(Long fid) {
		return feedRepository.updateVisit(fid);
	}
	
	@Override
	@Transactional
	public void delete(Long fid) {
		feedRepository.deleteById(fid);
	}

}
