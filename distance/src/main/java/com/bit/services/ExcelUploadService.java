package com.bit.services;

import com.bit.controller.StudentInfoRestController;
import com.bit.model.StudentInfo;
import com.bit.model.form_data.Address;
import com.bit.repo.ExcelAddressRepo;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;


@Service
@CrossOrigin(origins = "*")
public class ExcelUploadService {

    private static final Logger logger = LoggerFactory.getLogger(ExcelUploadService.class);

    @Autowired
    private ExcelAddressRepo excelAddressRepo;

    public List<Address> writeExcelToDB(MultipartFile reapExcelDataFile) {
        List<Address> addressExcelList = new ArrayList<>();
        List<Map<String, Integer>> badLine = new ArrayList<>();
        XSSFSheet worksheet = getSheet(reapExcelDataFile);
        for (int i = 1; i < worksheet.getPhysicalNumberOfRows(); i++) {
            Map<String, Integer> map = new HashMap<>();
            try {
                Row row = worksheet.getRow(i);
                Address addressExcel = new Address();
                addressExcel.setAddress((int) row.getCell(0).getNumericCellValue() +
                        " " + row.getCell(1).getStringCellValue());
                addressExcel.setDistanceSLS(row.getCell(2).getNumericCellValue());
                addressExcel.setDistanceRSS(row.getCell(3).getNumericCellValue());
                addressExcel.setDistanceLMS(row.getCell(4).getNumericCellValue());
                addressExcelList.add(addressExcel);
            } catch (NullPointerException e) {
                map.put("bad_row", i);
                badLine.add(map);
            } catch (IllegalStateException e) {
                map.put("bad_row", i);
                badLine.add(map);
            }

            if(badLine.size() != 0 ){
                throw new RuntimeException("", new Throwable());
            }

        }
        return addressExcelList;
    }

    public static XSSFSheet getSheet(MultipartFile reapExcelDataFile) {
        XSSFSheet worksheet = null;
        try {
            XSSFWorkbook xssfWorkbook = new XSSFWorkbook(reapExcelDataFile.getInputStream());
            worksheet = xssfWorkbook.getSheetAt(0);
        } catch (IOException e) {
            System.out.println("Exception at getSheet:" + e);
        }
        return worksheet;
    }

    @Transactional
    public void saveToAddresses(List<Address> list){
        list.forEach(s -> excelAddressRepo.save(s));
    }

    @Transactional
    public ResponseEntity saveAllToAddresses(XSSFSheet worksheet){
        List<Address> addressExcelList = new ArrayList<>();
        List<Map<String, String>> listOfBadRows = new ArrayList<>();
        for (int i = 1; i < worksheet.getPhysicalNumberOfRows(); i++) {
            Map<String, String> badMap = new HashMap<>();
            int a = 0;
            try {
                Row row = worksheet.getRow(i);
                Address address = new Address();
                a = 1;
                String streetNum = "";
                try{
                    streetNum = ((int)row.getCell(0).getNumericCellValue())+"";
                }catch (IllegalStateException e){
                    streetNum = row.getCell(0).getStringCellValue();
                }

                a = 2;
                String streetName = row.getCell(1).getStringCellValue();
                address.setAddress(streetNum + " " + streetName);
                a = 3;
                address.setDistanceSLS(row.getCell(2).getNumericCellValue());
                a = 4;
                address.setDistanceRSS(row.getCell(3).getNumericCellValue());
                a = 5;
                address.setDistanceLMS(row.getCell(4).getNumericCellValue());
                addressExcelList.add(address);
            } catch (NullPointerException e) {
                badMap.put("bad_row", (i+1)+"");
                badMap.put("bad_column", worksheet.getRow(0).getCell(a-1).getStringCellValue());
                listOfBadRows.add(badMap);
            } catch (IllegalStateException e) {
                badMap.put("bad_row", (i+1)+"");
                badMap.put("bad_column", worksheet.getRow(0).getCell(a-1).getStringCellValue());
                listOfBadRows.add(badMap);
            }
        }
        Map<String, String> map = new HashMap<>();
        map.put("recorded_rows", addressExcelList.size()+"");
        Set<Address> set = new HashSet<>(addressExcelList);
        addressExcelList.clear();
        addressExcelList.addAll(set);
        //excelAddressRepo.saveAll(addresExcelList);
        addressExcelList.forEach(
                a -> {
                    if(!excelAddressRepo.findTopAddressByAddress(a.getAddress()).isPresent()){
                        excelAddressRepo.save(a);
                    }
                }
        );
        listOfBadRows.add(map);
        if(listOfBadRows.size() > 1) {
            return new ResponseEntity(listOfBadRows, HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity(map, HttpStatus.CREATED);

    }


    @Transactional
    public Address findOneAddress(Address addressExcel){
        ExampleMatcher ignoringExampleMatcher = ExampleMatcher.matchingAny()
                .withMatcher("address", ExampleMatcher.GenericPropertyMatchers.startsWith().ignoreCase())
                .withIgnorePaths("distanceRSS", "distanceSLS", "distanceLMS", "distanceLHS");
        // FIXME this can throw null pointer exception
    return excelAddressRepo.findOne(Example.of(addressExcel,ignoringExampleMatcher )).get();
    }

    public double getDistanceFromAddresses(StudentInfo studentInfo, Address addresExcel){
        double distance = 0;
        if(studentInfo.getSchool().equalsIgnoreCase("RSS")){
            distance = addresExcel.getDistanceRSS();
        }else if(studentInfo.getSchool().equalsIgnoreCase("SLS")){
            distance = addresExcel.getDistanceSLS();
        }else if(studentInfo.getSchool().equalsIgnoreCase("LMS")){
            distance = addresExcel.getDistanceLMS();
        }
        return distance;
    }


}
