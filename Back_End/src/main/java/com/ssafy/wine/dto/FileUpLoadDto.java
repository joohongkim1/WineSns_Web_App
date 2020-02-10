package com.ssafy.wine.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class FileUpLoadDto {

	private String filePath;
	private String fileOriginalName;
	private String fileChangeName;
	private String fileType;
	private long fileSize;
}
