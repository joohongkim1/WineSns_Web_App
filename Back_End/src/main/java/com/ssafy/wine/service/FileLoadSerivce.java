package com.ssafy.wine.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.ssafy.wine.dto.FileLoadDto;

public interface FileLoadSerivce {

	public FileLoadDto uploadProfile(MultipartFile file, Long uid);
	public FileLoadDto uploadBackground(MultipartFile file, Long uid);
	public FileLoadDto uploadFeed(MultipartFile file, Long fid, Integer num);
	public String downloadProfile(Long uid);
	public String downloadBackground(Long uid);
	public List<String> downloadFeed(Long fid);
}
