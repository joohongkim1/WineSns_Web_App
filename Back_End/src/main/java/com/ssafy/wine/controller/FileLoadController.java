package com.ssafy.wine.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ssafy.wine.dto.FileLoadDto;
import com.ssafy.wine.enums.FileLoadEnum;
import com.ssafy.wine.service.FileLoadServiceImpl;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;


@RestController
@Api(tags = { "7. FileLoad" }, description = "File Upload & Download REST API")
@RequestMapping(value = "/fileload")
@CrossOrigin(origins = "*")
public class FileLoadController {

	@Autowired
	private FileLoadServiceImpl fileLoadService;

	@ApiOperation(value = "파일 업로드 - Swagger로 하면 오류가 있어요")
	@PostMapping("/uploadFile")
	public ResponseEntity<Object> uploadFile(@RequestPart("file") MultipartFile[] files, @RequestParam FileLoadEnum type, @RequestParam Long id) {
		try {
			List<FileLoadDto> fileDtos = new ArrayList<>();
			for (int i = 0; i < files.length; i++) {
				fileDtos.add(fileLoadService.uploadFile(files[i], type, id, i));
			}
			return new ResponseEntity<Object>(fileDtos, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "파일 불러오기")
	@GetMapping("/downloadFile")
	public ResponseEntity<Object> downloadFile(@RequestParam FileLoadEnum type, @RequestParam Long id) {
		try {
			List<String> paths = fileLoadService.downloadFile(type, id);
			return new ResponseEntity<Object>(paths, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}
	
}
