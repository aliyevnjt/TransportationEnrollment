package com.bit.controller;


import com.bit.model.form_data.AddresExcel;
import com.bit.model.StudentInfo;
import com.bit.services.DistanceCalculatorService;
import com.bit.services.ExcelUploadService;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class ExcelUploadRetrieveController {

    @Autowired
    ExcelUploadService excelUploadService;

    @Autowired
    private DistanceCalculatorService distanceCalculatorService;

    @PostMapping("/distanceLocal")
    public ResponseEntity getDistanceLocal(@Valid @RequestBody StudentInfo studentInfo){
        AddresExcel addresExcel = new AddresExcel();
        addresExcel.setAddress(studentInfo.getAddress());
        double distance = 0;
        addresExcel = excelUploadService.findOneAddress(addresExcel);
        if(studentInfo.getSchool().equalsIgnoreCase("RSS")){
            distance = addresExcel.getDistanceRSS();
        }else if(studentInfo.getSchool().equalsIgnoreCase("SLS")){
            distance = addresExcel.getDistanceSLS();
        }else if(studentInfo.getSchool().equalsIgnoreCase("LMS")){
            distance = addresExcel.getDistanceLMS();
        }else if(studentInfo.getSchool().equalsIgnoreCase("LHS")){
            distance = addresExcel.getDistanceLHS();
        }
        return new ResponseEntity(distanceCalculatorService.createStudent(studentInfo, distance), HttpStatus.OK);
    }

    @PostMapping("/import")
    public ResponseEntity mapReapExcelDatatoDB(@RequestParam("file") MultipartFile reapExcelDataFile)  {
        List<AddresExcel> addresExcelList = new ArrayList<>();
        XSSFSheet worksheet = excelUploadService.getSheet(reapExcelDataFile);
        List<Map<String, String>> listOfBadRows = new ArrayList<>();
        for (int i = 1; i < worksheet.getPhysicalNumberOfRows(); i++) {
            Map<String, String> badMap = new HashMap<>();
            int a = 0;
            try {
                Row row = worksheet.getRow(i);
                AddresExcel addresExcel = new AddresExcel();
                a = 1;
                int streetNum = (int) row.getCell(0).getNumericCellValue();
                a = 2;
                String streetName = row.getCell(1).getStringCellValue();
                addresExcel.setAddress(streetNum + " " + streetName);
                a = 3;
                addresExcel.setDistanceLMS(row.getCell(2).getNumericCellValue());
                a = 4;
                addresExcel.setDistanceLHS(row.getCell(3).getNumericCellValue());
                a = 5;
                addresExcel.setDistanceSLS(row.getCell(4).getNumericCellValue());
                a = 6;
                addresExcel.setDistanceRSS(row.getCell(5).getNumericCellValue());
                addresExcelList.add(addresExcel);
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
        Map<String, Integer> map = new HashMap<>();
        map.put("recorded_rows", addresExcelList.size());
        excelUploadService.saveAllToAddresses(addresExcelList);
        if(listOfBadRows.size() > 0) {
            return new ResponseEntity(listOfBadRows, HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity(map, HttpStatus.CREATED);
    }


}
