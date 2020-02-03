package com.ssafy.wine.dto;

import java.io.Serializable;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
public class WineLikeId implements Serializable {
	private Long user;
	private Long wine;
}
