package com.ssafy.wine.service;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.ssafy.wine.exception.FileDownloadException;
import com.ssafy.wine.exception.FileUploadException;
import com.ssafy.wine.property.FileUploadProperties;

@Service
public class FileLoadService {

	private final Path profileLocation;
	private final Path backgroundLocation;
	private final Path feedLocation;

	@Autowired
	public FileLoadService(FileUploadProperties prop) {
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

	public String storeFile(MultipartFile file, Integer type) {
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		System.out.println(fileName);
		try {
			// 파일명에 부적합 문자가 있는지 확인한다.
			if (fileName.contains(".."))
				throw new FileUploadException("파일명에 부적합 문자가 포함되어 있습니다. " + fileName);

			Path targetLocation = null;
			switch (type) {
			case 1:
				targetLocation = this.profileLocation.resolve(fileName);
				break;
			case 2:
				targetLocation = this.backgroundLocation.resolve(fileName);
				break;
			case 3:
				Files.createDirectories(this.feedLocation.resolve(String.valueOf(type)));
				targetLocation = this.feedLocation.resolve(String.valueOf(type)).resolve(String.valueOf(type + ".png"));
				break;
			default:
				break;
			}

			Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

			return fileName;
		} catch (Exception e) {
			throw new FileUploadException("[" + fileName + "] 파일 업로드에 실패하였습니다. 다시 시도하십시오.", e);
		}
	}

	public String loadProfile(String fileName) {
		try {
			Path filePath = this.profileLocation.resolve(fileName).normalize();
			if (filePath != null)
				return filePath.toString();
			else
				throw new FileDownloadException(fileName + " 파일을 찾을 수 없습니다.");
		} catch (Exception e) {
			throw new FileDownloadException(fileName + " 파일을 찾을 수 없습니다.", e);
		}
	}

	public String loadBackground(String fileName) {
		try {
			Path filePath = this.profileLocation.resolve(fileName).normalize();
			if (filePath != null)
				return filePath.toString();
			else
				throw new FileDownloadException(fileName + " 파일을 찾을 수 없습니다.");
		} catch (Exception e) {
			throw new FileDownloadException(fileName + " 파일을 찾을 수 없습니다.", e);
		}
	}

	public List<String> loadFeed(Long fid) {

		Path filePath = this.profileLocation.resolve(String.valueOf(fid)).normalize();
		System.out.println(filePath.toString());

		File f = new File(filePath.toString());
		File[] files = f.listFiles();

		System.out.println(files.length);
		for (int i = 0; i < files.length; i++) {
			if (files[i].isFile()) {
				System.out.println("파일 : " + files[i].getName());
			} else {
				System.out.println("디렉토리명 : " + files[i].getName());
			}
		}
		return null;
	}

}
