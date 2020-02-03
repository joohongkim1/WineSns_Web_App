package com.ssafy.wine.repo;

import org.springframework.data.repository.CrudRepository;

import com.ssafy.wine.dto.Feed;

public interface FeedRepository extends CrudRepository<Feed, Long> {
}
