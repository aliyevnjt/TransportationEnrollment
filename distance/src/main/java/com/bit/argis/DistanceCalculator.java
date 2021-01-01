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

import java.util.List;
import java.util.Map;


public class DistanceCalculator {
    @Autowired
    private RestTemplate restTemplate;

    public DistanceCalculator() {
    }

    public static void main(String[] args) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        Map<String,Object> map = mapper.readValue(stops, Map.class);
        System.out.println(((List)map.get("features")).get(0));
        ((Map)(((Map)((List)map.get("features")).get(0)).get("geometry"))).put("x", 80);
        ((Map)(((Map)((List)map.get("features")).get(0)).get("geometry"))).put("y", 90);
        ((Map)(((Map)((List)map.get("features")).get(1)).get("geometry"))).put("x", 80);
        ((Map)(((Map)((List)map.get("features")).get(1)).get("geometry"))).put("y", 90);
        System.out.println(map.toString());
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

    public Summary getDistance(String start){
        Map <String, Double> locations = getCoordinates(start);
        ObjectMapper mapper = new ObjectMapper();
        Map<String,Object> map = null;
        try {
            map = mapper.readValue(stops, Map.class);
            System.out.println(((List)map.get("features")).get(0));
            ((Map)(((Map)((List)map.get("features")).get(0)).get("geometry"))).put("x", -71.480633239951274);
            ((Map)(((Map)((List)map.get("features")).get(0)).get("geometry"))).put("y", 42.542210343546344);
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
}
