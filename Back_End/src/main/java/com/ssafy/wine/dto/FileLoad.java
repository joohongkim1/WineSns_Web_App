package com.ssafy.wine.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class FileLoad {
	private String fileName;
	private String fileDownloadUri;
	private String fileType;
	private long size;
}
