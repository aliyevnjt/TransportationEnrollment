package com;

import com.bit.model.form_data.Address;
import com.bit.model.form_data.Grades;
import com.bit.model.form_data.Schools;
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
	public Grades getGrades() {
		return new Grades();
	}

	@Bean
	public Schools getSchoolNames() {
		return new Schools();
	}

	@Bean
	public Address getAddress(){ return new Address(); }

	public static void main(String[] args) {
		SpringApplication.run(DistanceApplication.class, args);
	}

}
