package com.bit.services;

import com.bit.model.StudentInfo;
import com.bit.model.directions.Summary;
import com.bit.model.directions.Total;
import com.bit.model.coordinates.Coordinates;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParser;
import org.springframework.boot.json.JsonParserFactory;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service
public class DistanceCalculatorService {


    @Autowired
    private RestTemplate restTemplate;

    public DistanceCalculatorService() {
    }

    private static String stops = "{\n" +
            "     \n" +
            "      \"features\":  [\n" +
            "          {\n" +
            "          \"geometry\": {\n" +
            "            \"x\": -71.480633239951274,\n" +
            "            \"y\": 42.542210343546344,\n" +
            "            \"spatialReference\": {\n" +
            "              \"wkid\": \"4326\"\n" +
            "            }\n" +
            "          },\n" +
            "          \"attributes\": {\n" +
            "            \"Name\": \"loc\"\n" +
            "          }\n" +
            "        },\n" +
            "        {\n" +
            "          \"geometry\": {\n" +
            "            \"x\": 42.542210343546344,\n" +
            "            \"y\": 42.542210343546344,\n" +
            "            \"spatialReference\": {\n" +
            "              \"wkid\": \"4326\"\n" +
            "            }\n" +
            "          },\n" +
            "          \"attributes\": {\n" +
            "            \"Name\": \"dest\"\n" +
            "          }\n" +
            "        }\n" +
            "      ]\n" +
            "    }";

    public String getToken(){
        String string = restTemplate.getForObject("https://www.arcgis.com/sharing/rest/oauth2/token/?f=json&client_id=0rTM81Miro6jsojs&client_secret=d8c0eb945aac4dbb8f9365237703b70a&grant_type=client_credentials&expiration=1440", String.class);
        JsonParser jsonParser = JsonParserFactory.getJsonParser();
        Map<String, Object> map = jsonParser.parseMap(string);
        return map.get("access_token").toString();
    }

    public Map<String, String> getCoordinates(String address){
        String uri = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&singleLine=" + address + "&outFields=Match_addr,Addr_type";
        ResponseEntity <Coordinates> responseEntity = restTemplate.getForEntity(uri, Coordinates.class);
        Coordinates coordinates = responseEntity.getBody();
        Map <String, String> location = new HashMap<>();
        location.put("x", coordinates.getCandidates().get(0).getLocation().getX());
        location.put("y", coordinates.getCandidates().get(0).getLocation().getY());
        return location;

    }

    public Summary getDistance(String start, String schoolName){
        Map <String, String> locations = getCoordinates(start);
        Map<String , String> schoolCoord= new HashMap<>();
        schoolCoord = schoolXandY(schoolName);
        ObjectMapper mapper = new ObjectMapper();
        Map<String,Object> map = null;
        try {
            map = mapper.readValue(stops, Map.class);
            ((Map)(((Map)((List)map.get("features")).get(1)).get("geometry"))).put("x", schoolCoord.get("x"));
            ((Map)(((Map)((List)map.get("features")).get(1)).get("geometry"))).put("y", schoolCoord.get("y"));
            ((Map)(((Map)((List)map.get("features")).get(0)).get("geometry"))).put("x", locations.get("x"));
            ((Map)(((Map)((List)map.get("features")).get(0)).get("geometry"))).put("y", locations.get("y"));
        }catch (Exception e){

        }
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        MultiValueMap<String, String> req = new LinkedMultiValueMap<>();
        req.add("f", "json");
        req.add("token", getToken());
        req.add("stops", map.toString());
        HttpEntity<MultiValueMap<String, String>> entity = new HttpEntity<>(req, headers);
        ResponseEntity<Total> responseEntity = restTemplate.exchange("https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World/solve",
                HttpMethod.POST,
                entity,
                Total.class);
        return responseEntity.getBody().getDirections().get(0).getSummary();
    }

    private Map<String , String> schoolXandY(String schooleName){
        Map<String , String> xAndy= new HashMap<>();
        switch (schooleName.toLowerCase()){
            case "lhs":
            xAndy.put("x","-71.507431357869621");
            xAndy.put("y","42.541200449942238");
            break;
            case "lms":
            xAndy.put("x","-71.48534864722069");
            xAndy.put("y","42.542769416488142");
            break;
            case "rss":
            xAndy.put("x","-71.484169648720027");
            xAndy.put("y","42.545477609404116");
            break;
            case "sls":
            xAndy.put("x","-71.457937309266043");
            xAndy.put("y","42.530918956050158");
            break;
        }
        return xAndy;
    }

    public StudentInfo createStudent(StudentInfo studentInfo, Double distance){
        String fullAddress = studentInfo.getAddress() + " " + studentInfo.getCity()
                + " " + studentInfo.getState() + " " + studentInfo.getZip();
        double dist = 0;
        if(distance == null){
            dist = getDistance(fullAddress, studentInfo.getSchool()).getTotalLength();
        }else {
            dist = distance;
        }
        studentInfo.setDistanceFromSchool(round(dist,4));
        String grade = studentInfo.getGrade();
        if(grade.equals("7") || grade.equals("8") || grade.equals("9")
                || grade.equals("10") || grade.equals("11") || grade.equals("12")){
            studentInfo.setEnrollmentStatus("paid");
        }
        else {
            if(studentInfo.getDistanceFromSchool() > 2){
                studentInfo.setEnrollmentStatus("free");
            }else {
                studentInfo.setEnrollmentStatus("paid");
            }
        }
        return studentInfo;
    }



    public  List<StudentInfo> createStudents(List<StudentInfo> studentInfo){
        List<StudentInfo> responseStudentInfo = new ArrayList<>();
        for (int i = 0; i < studentInfo.size(); i++) {
            String fullAddress = studentInfo.get(i).getAddress() + " " + studentInfo.get(i).getCity()
                    + " " + studentInfo.get(i).getState() + " " + studentInfo.get(i).getZip();
            double dist = getDistance(fullAddress, studentInfo.get(i).getSchool()).getTotalLength();
            studentInfo.get(i).setDistanceFromSchool(round(dist,2));
            String grade = studentInfo.get(i).getGrade();
            if(grade.equals("7") || grade.equals("8") || grade.equals("9")
                    || grade.equals("10") || grade.equals("11") || grade.equals("12")){
                studentInfo.get(i).setEnrollmentStatus("paid");
            }
            else {
                if(studentInfo.get(i).getDistanceFromSchool() > 2){
                    studentInfo.get(i).setEnrollmentStatus("free");
                }else {
                    studentInfo.get(i).setEnrollmentStatus("paid");
                }
            }
            responseStudentInfo.add(studentInfo.get(i));
        }
        return responseStudentInfo;
    }

    private static double round(double value, int places) {
        if (places < 0) throw new IllegalArgumentException();
        long factor = (long) Math.pow(10, places);
        value = value * factor;
        long tmp = Math.round(value);
        return (double) tmp / factor;
    }

}
