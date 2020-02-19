package com.ssafy.wine.repo;

import java.math.BigDecimal;
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
import com.ssafy.wine.enums.WineCountryEnum;

public interface WineRepository extends CrudRepository<Wine, Long>, QuerydslPredicateExecutor<Wine> {

	List<Wine> findAllByOrderByNameKorAsc();

	List<Wine> findAllByOrderByNameEngAsc();

	List<Wine> findAllByOrderByVisitDesc();

	List<Wine> findAllByOrderByLikeNumDesc();

	List<Wine> findTop3ByOrderByVisitDesc();

	List<Wine> findTop5ByOrderByVisitDesc();

	List<Wine> findTop3ByOrderByLikeNumDesc();

	List<Wine> findTop5ByOrderByLikeNumDesc();

	List<Wine> findByNameEngLike(String name);

	List<Wine> findByNameKorLike(String name);

	List<Wine> findByWhenUseContains(String name);
	
	List<Wine> findByFoodMatchContains(String name);

	@Query(value = "select DISTINCT w.country from wine w", nativeQuery = true)
	List<String> findDistinctCountryAll();

	@Query(value = "select DISTINCT if(w.winery like \"Chateau%\", \"Chateau\", w.winery) from wine w where w.country = :country", nativeQuery = true)
	List<String> findDistinctWineryByCountry(@Param("country") String country);

	@Query(value = "select DISTINCT if(w.winery like \"Chateau%\", \"Chateau\", w.winery) from wine w", nativeQuery = true)
	List<String> findDistinctWineryAll();

	@Modifying
	@Query(value = "UPDATE wine w set w.visit = w.visit + 1 where w.wid = :wid", nativeQuery = true)
	Integer updateVisit(@Param("wid") Long wid);

	@Modifying
	@Query(value = "UPDATE wine w set w.like_num = :num where w.wid = :wid", nativeQuery = true)
	Integer updateLikeNum(@Param("wid") Long wid, @Param("num") Integer num);

	public default Predicate search(String type, Boolean sparkling, WineCountryEnum[] country, Integer sweet,
			BigDecimal alcohol) {
		BooleanBuilder builder = new BooleanBuilder();
		QWine wine = QWine.wine;
		if (country != null) {
			for (int i = 0; i < country.length; i++) {
				builder.or(wine.country.eq(country[i].toString()));
			}
		}
		if (type != null)
			builder.and(wine.type.eq(type));
		if (sparkling != null)
			builder.and(wine.sparkling.eq(sparkling));
		if (sweet != null)
			builder.and(wine.sweet.eq(sweet));
		if (alcohol != null)
			builder.and(wine.alcohol.loe(alcohol));

		return builder;
	}

}
