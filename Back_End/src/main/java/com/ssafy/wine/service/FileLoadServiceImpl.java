package com.ssafy.wine.service;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.ssafy.wine.dto.FileLoadDto;
import com.ssafy.wine.exception.FileUploadException;
import com.ssafy.wine.property.FileUploadProperties;

@Service
public class FileLoadServiceImpl implements FileLoadSerivce {

	private final Path profileLocation;
	private final Path backgroundLocation;
	private final Path feedLocation;

	@Autowired
	public FileLoadServiceImpl(FileUploadProperties prop) {
		this.profileLocation = Paths.get(prop.getUploadImgProfile()).toAbsolutePath().normalize();
		this.backgroundLocation = Paths.get(prop.getUploadImgBackground()).toAbsolutePath().normalize();
		this.feedLocation = Paths.get(prop.getUploadImgFeed()).toAbsolutePath().normalize();
		try {
			Files.createDirectories(this.profileLocation);
			Files.createDirectories(this.backgroundLocation);
			Files.createDirectories(this.feedLocation);
		} catch (Exception e) {
			throw new FileUploadException("파일을 업로드할 디렉토리를 생성하지 못했습니다.", e);
		}
	}

	@Override
	public FileLoadDto uploadProfile(MultipartFile file, Long uid) {
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		try {
			Path targetLocation = this.profileLocation.resolve(String.valueOf(uid) + ".png");
			Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
			return new FileLoadDto(fileName, targetLocation.toString(), file.getContentType(), file.getSize());
		} catch (Exception e) {
			throw new FileUploadException("[" + fileName + "] 파일 업로드에 실패하였습니다. 다시 시도하십시오.", e);
		}
	}

	@Override
	public FileLoadDto uploadBackground(MultipartFile file, Long uid) {
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		try {
			Path targetLocation = this.backgroundLocation.resolve(String.valueOf(uid) + ".png");
			Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
			return new FileLoadDto(fileName, targetLocation.toString(), file.getContentType(), file.getSize());
		} catch (Exception e) {
			throw new FileUploadException("[" + fileName + "] 파일 업로드에 실패하였습니다. 다시 시도하십시오.", e);
		}
	}

	@Override
	public FileLoadDto uploadFeed(MultipartFile file, Long fid, Integer num) {
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		try {
			Path targetLocation = this.feedLocation.resolve(String.valueOf(fid)).resolve(String.valueOf(num) + ".png");
			Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
			return new FileLoadDto(fileName, targetLocation.toString(), file.getContentType(), file.getSize());
		} catch (Exception e) {
			throw new FileUploadException("[" + fileName + "] 파일 업로드에 실패하였습니다. 다시 시도하십시오.", e);
		}
	}

	@Override
	public String downloadProfile(Long uid) {
		try {
			Path filePath = this.profileLocation.normalize();
			File f = new File(filePath.toString());
			File[] files = f.listFiles();
			for (int i = 0; i < files.length; i++) {
				if (files[i].getName().toString().equals(uid + ".png")) {
					return filePath.toString() + "\\" + files[i].getName().toString();
				}
			}
			throw new FileUploadException("[" + uid + ".png ] 파일을 찾지 못했습니다.");
		} catch (Exception e) {
			throw new FileUploadException("[" + uid + ".png ] 파일 다운로드 실패하였습니다.", e);
		}
	}

	@Override
	public String downloadBackground(Long uid) {
		try {
			Path filePath = this.backgroundLocation.normalize();
			File f = new File(filePath.toString());
			File[] files = f.listFiles();
			for (int i = 0; i < files.length; i++) {
				if (files[i].getName().toString().equals(uid + ".png")) {
					return filePath.toString() + "\\" + files[i].getName().toString();
				}
			}
			throw new FileUploadException("[" + uid + ".png ] 파일을 찾지 못했습니다.");
		} catch (Exception e) {
			throw new FileUploadException("[" + uid + ".png ] 파일 다운로드 실패하였습니다.", e);
		}
	}

	@Override
	public List<String> downloadFeed(Long fid) {
		try {
			Path filePath = this.feedLocation.resolve(String.valueOf(fid)).normalize();
			System.out.println(filePath.toString());
			File f = new File(filePath.toString());
			File[] files = f.listFiles();
			List<String> paths = new ArrayList<>();
			for (int i = 0; i < files.length; i++) {
				paths.add(filePath.toString() + "\\" + files[i].getName().toString());
			}
			return paths;
		} catch (Exception e) {
			throw new FileUploadException("Feed 파일 다운로드 실패하였습니다.", e);
		}
	}

}
