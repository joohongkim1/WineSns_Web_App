package com.ssafy.wine.repo;


import org.springframework.data.repository.CrudRepository;

import com.ssafy.wine.dto.Follow;
import com.ssafy.wine.dto.FollowId;

public interface FollowRepository extends CrudRepository<Follow, FollowId>{
}
