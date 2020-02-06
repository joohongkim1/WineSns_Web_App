package com.ssafy.wine.repo;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.ssafy.wine.entity.Comment;

public interface CommentRepository extends CrudRepository<Comment, Long> {

	@Modifying
	@Query(value = "UPDATE comment c set c.content = :content, c.update_time_at = now() where c.cid = :cid", nativeQuery = true)
	Integer updateFeed(@Param("cid") Long cid, @Param("content") String content);
	
}
