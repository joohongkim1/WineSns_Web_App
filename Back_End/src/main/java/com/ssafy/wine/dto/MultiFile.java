package com.ssafy.wine.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class MultiFile {

	private String name;
	private MultipartFile[] files;
}
