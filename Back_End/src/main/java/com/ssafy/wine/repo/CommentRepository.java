package com.ssafy.wine.repo;
import org.springframework.data.repository.CrudRepository;

import com.ssafy.wine.dto.Comment;

public interface CommentRepository extends CrudRepository<Comment, Long> {

}
