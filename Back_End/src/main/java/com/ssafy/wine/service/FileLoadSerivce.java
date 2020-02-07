package com.ssafy.wine.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.ssafy.wine.dto.FileInfoDto;
import com.ssafy.wine.dto.FileLoadDto;
import com.ssafy.wine.enums.FileLoadEnum;

public interface FileLoadSerivce {

	public FileLoadDto uploadFile(MultipartFile file, FileLoadEnum type, Long id, Integer num);

	public List<FileInfoDto> downloadFile(FileLoadEnum type, Long id, String uri);

	public String deleteFile(FileLoadEnum type, Long id, String name);

}
