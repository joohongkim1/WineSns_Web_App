package com.ssafy.wine.repo;


import org.springframework.data.repository.CrudRepository;

import com.ssafy.wine.dto.WineLike;
import com.ssafy.wine.dto.WineLikeId;

public interface WineLikeRepository extends CrudRepository<WineLike, WineLikeId> {
}
