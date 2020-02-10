package com.ssafy.wine.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class FileDownLoadDto {
	
	private String fileUrl;
	private String fileName;
	private long fileSize;
	
}
