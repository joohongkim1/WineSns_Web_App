package com.ssafy.wine.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class CommentDto {
	private Long cid;
	private String content;
	protected LocalDateTime createdTimeAt;
	protected LocalDateTime updateTimeAt;
	private Long parentCid;
}
