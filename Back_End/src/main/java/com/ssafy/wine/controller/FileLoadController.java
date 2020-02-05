package com.ssafy.wine.controller;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.ssafy.wine.entity.FileLoad;
import com.ssafy.wine.service.FileLoadService;

@RestController
public class FileLoadController {

	@Autowired
	private FileLoadService fileLoadService;

	@PostMapping("/uploadFile")
	public FileLoad uploadFile(@RequestParam("file") MultipartFile file, @RequestParam Long uid, @RequestParam Integer type) {
		String fileName = fileLoadService.storeFile(file, type);

		String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/downloadFile/")
				.path(fileName).toUriString();

		return new FileLoad(fileName, fileDownloadUri, file.getContentType(), file.getSize());
	}

	@PostMapping("/uploadMultipleFiles")
	public List<FileLoad> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files, @RequestParam Long fid) {
		return Arrays.asList(files).stream().map(file -> uploadFile(file, fid, 3)).collect(Collectors.toList());
	}

	@GetMapping("/downloadProfile/{uid}")
	public String downloadProfile(@PathVariable Long uid ) {
		return fileLoadService.loadProfile(String.valueOf(uid));
	}
	
	@GetMapping("/downloadBackground/{uid}")
	public String downloadBackground(@PathVariable Long uid) {
		return fileLoadService.loadBackground(String.valueOf(uid));
	}
	
	@GetMapping("/downloadMultiFile/{fid}")
	public List<String> downloadMultiFile(@PathVariable Long fid) {
		return fileLoadService.loadFeed(fid);
	}

}
