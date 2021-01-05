package com.bit.argis;

import com.bit.model.Summary;
import com.bit.model.Total;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParser;
import org.springframework.boot.json.JsonParserFactory;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class DistanceCalculator {
    @Autowired
    private RestTemplate restTemplate;

    public DistanceCalculator() {
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

    public Map<String, Double> getCoordinates(String address){
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates")
                .queryParam("f", "json")
                .queryParam("singleLine", address)
                .queryParam("outFields", "Match_addr,Addr_type");
        String response = restTemplate.getForObject(builder.build().encode().toUri(), String.class);
        JsonParser jsonParser = JsonParserFactory.getJsonParser();
        Map<String, Object> map = jsonParser.parseMap(response);
        List list = ((List)map.get("candidates"));
        Map candidates = (Map)list.get(0);
        Map <String, Double> location = (Map)candidates.get("location");
        return location;

    }

    public Summary getDistance(String start, String schoolName){
        Map <String, Double> locations = getCoordinates(start);
        Map<String , String> schoolCoord= new HashMap<>();
        schoolCoord = schoolXandY(schoolName);
        ObjectMapper mapper = new ObjectMapper();
        Map<String,Object> map = null;
        try {
            map = mapper.readValue(stops, Map.class);
            ((Map)(((Map)((List)map.get("features")).get(0)).get("geometry"))).put("x", schoolCoord.get("x"));
            ((Map)(((Map)((List)map.get("features")).get(0)).get("geometry"))).put("y", schoolCoord.get("y"));
            ((Map)(((Map)((List)map.get("features")).get(1)).get("geometry"))).put("x", locations.get("x").toString());
            ((Map)(((Map)((List)map.get("features")).get(1)).get("geometry"))).put("y", locations.get("y").toString());
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




}
