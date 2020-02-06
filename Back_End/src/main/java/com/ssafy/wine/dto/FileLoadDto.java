package com.ssafy.wine.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class FileLoadDto {
	private String fileName;
	private String filePath;
	private String fileType;
	private long size;
}
