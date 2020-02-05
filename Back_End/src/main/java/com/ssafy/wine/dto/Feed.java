package com.ssafy.wine.dto;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
@Table(name = "feed")
public class Feed {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long fid;
	
	@ManyToOne
	@JoinColumn(name = "user_email")
	private User user;
	
	@ManyToOne
	@JoinColumn(name = "wine_id")
	private Wine wine;
	
	@Column(length = 4000)
	private String content;
	
	@Column
	private LocalDateTime date;
	
	@OneToMany(mappedBy = "feed")
	private List<Comment> comments = new ArrayList<>();

	@Builder
	public Feed(User user, String content, LocalDateTime date) {
		this.user = user;
		this.content = content;
		this.date = date;
	}
	
	@Builder
	public Feed(User user, Wine wine, String content, LocalDateTime date) {
		this.user = user;
		this.wine = wine;
		this.content = content;
		this.date = date;
	}

}
