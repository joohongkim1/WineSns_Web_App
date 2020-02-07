package com.ssafy.wine.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.ssafy.wine.dto.FileLoadDto;
import com.ssafy.wine.enums.FileLoadEnum;

public interface FileLoadSerivce {

	public FileLoadDto uploadFile(MultipartFile file, FileLoadEnum type, Long id, Integer num);
	public List<String> downloadFile(FileLoadEnum type, Long id);
}
