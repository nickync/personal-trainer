package com.personaltrainer.pt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;

@SpringBootApplication
public class PtApplication {

	public static void main(String[] args) {
//		SpringApplication.run(PtApplication.class, args);
		int[] arr = {1,2,3,4,5};
		Arrays.stream(arr).forEach(System.out::println);
	}

}
