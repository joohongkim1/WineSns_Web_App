package com.ssafy.wine.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Predicate;
import com.ssafy.wine.entity.QWine;
import com.ssafy.wine.entity.Wine;

public interface WineRepository extends CrudRepository<Wine, Long>, QuerydslPredicateExecutor<Wine> {

	List<Wine> findAllByOrderByNameKorAsc();

	List<Wine> findAllByOrderByNameEngAsc();

	List<Wine> findAllByOrderByVisitDesc();

	List<Wine> findAllByOrderByLikeNumDesc();

	List<Wine> findTop3ByOrderByVisitDesc();

	List<Wine> findTop10ByOrderByVisitDesc();

	List<Wine> findTop3ByOrderByLikeNumDesc();

	List<Wine> findTop10ByOrderByLikeNumDesc();

	List<Wine> findByNameEngLike(String name);

	List<Wine> findByNameKorLike(String name);

	@Modifying
	@Query(value = "UPDATE wine w set w.visit = w.visit + 1 where w.wid = :wid", nativeQuery = true)
	Integer updateVisit(@Param("wid") Long wid);

	@Modifying
	@Query(value = "UPDATE wine w set w.like_num = :num where w.wid = :wid", nativeQuery = true)
	Integer updateLikeNum(@Param("wid") Long wid, @Param("num") Integer num);

	public default Predicate search(String type, Boolean sparkling, String country, Integer sweet) {
		BooleanBuilder builder = new BooleanBuilder();
		QWine wine = QWine.wine;
		if (type != null)
			builder.and(wine.type.eq(type));
		if (sparkling != null)
			builder.and(wine.sparkling.eq(sparkling));
		if (country != null)
			builder.and(wine.country.eq(country));
		if (sweet != null)
			builder.and(wine.sweet.eq(sweet));
		return builder;
	}

}
