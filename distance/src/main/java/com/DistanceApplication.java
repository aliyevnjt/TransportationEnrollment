package com;

import com.bit.argis.DistanceCalculator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class DistanceApplication {

	@Bean
	public RestTemplate getRestTemplate(){
		return new RestTemplate();
	}

	@Bean
	public DistanceCalculator getDistanceCalculator(){
		return new DistanceCalculator();
	}


	public static void main(String[] args) {
		SpringApplication.run(DistanceApplication.class, args);
	}

}
