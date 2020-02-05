package com.ssafy.wine.repo;

import java.math.BigDecimal;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.ssafy.wine.dto.Feed;

public interface FeedRepository extends CrudRepository<Feed, Long> {

	@Modifying
	@Query(value = "UPDATE feed f set f.content = :content, f.update_time_at = now() where f.fid = :fid", nativeQuery = true)
	Integer updateFeed(@Param("fid") Long fid, @Param("content") String content);

	@Modifying
	@Query(value = "UPDATE feed f " + "set f.content = :content, f.wine_id = :wid, f.rating = :rating, f.update_time_at = now()"
			+ "where f.fid = :fid", nativeQuery = true)
	Integer updateFeed(@Param("fid") Long fid, @Param("wid") Long wid, @Param("rating") BigDecimal rating,
			@Param("content") String content);

	@Modifying
	@Query(value = "UPDATE feed f set f.visit = f.visit + 1 where f.fid = :fid", nativeQuery = true)
	Integer updateVisit(@Param("fid") Long fid);

	@Modifying
	@Query(value = "UPDATE feed f set f.like_num = :num where f.fid = :fid", nativeQuery = true)
	Integer updateLikeNum(@Param("fid") Long fid, @Param("num") Integer num);

}
