package com.ssafy.wine.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class FeedDto {

	private Long fid;
	private BigDecimal rating;
	private String content;
	private LocalDateTime createdTimeAt;
	private LocalDateTime updateTimeAt;
	private Long wineWid;
	private String userEmail;
	private String userNickname;
	private Integer visit;
	private Integer likeNum;
	
}
