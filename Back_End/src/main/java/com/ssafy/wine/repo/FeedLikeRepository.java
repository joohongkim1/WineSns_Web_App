package com.ssafy.wine.repo;

import org.springframework.data.repository.CrudRepository;

import com.ssafy.wine.dto.FeedLike;

public interface FeedLikeRepository extends CrudRepository<FeedLike, Long> {
}
