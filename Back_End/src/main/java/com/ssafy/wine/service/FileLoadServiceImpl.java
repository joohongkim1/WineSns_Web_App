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

import com.ssafy.wine.dto.FileInfoDto;
import com.ssafy.wine.dto.FileLoadDto;
import com.ssafy.wine.enums.FileLoadEnum;
import com.ssafy.wine.exception.FileUploadException;
import com.ssafy.wine.property.FileLoadProperties;

@Service
public class FileLoadServiceImpl implements FileLoadSerivce {

	private final Path profileLocation;
	private final Path backgroundLocation;
	private final Path feedLocation;

	@Autowired
	public FileLoadServiceImpl(FileLoadProperties prop) {
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
	public FileLoadDto uploadFile(MultipartFile file, FileLoadEnum type, Long id, Integer num) {
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		try {
			Path targetLocation;
			StringBuilder sb = new StringBuilder();
			sb.append(String.valueOf(id)).append("/").append(String.valueOf(num)).append(".")
					.append(file.getContentType().split("/")[1]);
			switch (type) {
			case PROFILE:
				Files.createDirectories(this.profileLocation.resolve(String.valueOf(id)));
				targetLocation = this.profileLocation.resolve(sb.toString());
				break;
			case BACKGROUND:
				Files.createDirectories(this.backgroundLocation.resolve(String.valueOf(id)));
				targetLocation = this.backgroundLocation.resolve(sb.toString());
				break;
			case FEED:
				Files.createDirectories(this.feedLocation.resolve(String.valueOf(id)));
				targetLocation = this.feedLocation.resolve(sb.toString());
				break;
			default:
				throw new FileUploadException("[" + fileName + "] 파일 업로드에 실패하였습니다. 잘못된 type 값 입니다.");
			}

			Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
			return new FileLoadDto(fileName, targetLocation.toString(), file.getContentType(), file.getSize());
		} catch (Exception e) {
			throw new FileUploadException("[" + fileName + "] 파일 업로드에 실패하였습니다. 다시 시도하십시오.", e);
		}
	}

	@Override
	public List<FileInfoDto> downloadFile(FileLoadEnum type, Long id, String uri) {
		try {
			Path filePath;
			switch (type) {
			case PROFILE:
				filePath = this.profileLocation.resolve(String.valueOf(id)).normalize();
				break;
			case BACKGROUND:
				filePath = this.backgroundLocation.resolve(String.valueOf(id)).normalize();
				break;
			case FEED:
				filePath = this.feedLocation.resolve(String.valueOf(id)).normalize();
				break;
			default:
				throw new FileUploadException("Feed 파일 다운로드 실패하였습니다. 잘못된 type 값 입니다.");
			}

			File f = new File(filePath.toString());
			File[] files = f.listFiles();
			List<FileInfoDto> fileInfoDtos = new ArrayList<>();

			for (File file : files) {
				StringBuilder sb = new StringBuilder();
				sb.append(uri).append(file.toURI().toString().split("Img")[1]);
				fileInfoDtos.add(new FileInfoDto(file.getName(), file.length(), sb.toString()));
			}
			return fileInfoDtos;
		} catch (Exception e) {
			throw new FileUploadException("Feed 파일 다운로드 실패하였습니다.", e);
		}
	}

	@Override
	public String deleteFile(FileLoadEnum type, Long id, String name) {
		try {
			Path targetPath;
			StringBuilder sb = new StringBuilder();
			sb.append(String.valueOf(id)).append("/").append(name);
			switch (type) {
			case PROFILE:
				targetPath = this.profileLocation.resolve(sb.toString()).normalize();
				break;
			case BACKGROUND:
				targetPath = this.backgroundLocation.resolve(sb.toString()).normalize();
				break;
			case FEED:
				targetPath = this.feedLocation.resolve(sb.toString()).normalize();
				break;
			default:
				throw new FileUploadException("Feed 파일 삭제에 실패했습니다. 잘못된 type 값 입니다.");
			}
			Files.delete(targetPath);
			return targetPath.toString();
		} catch (Exception e) {
			throw new FileUploadException("Feed 파일 삭제에 실패하였습니다.", e);
		}

	}

}
