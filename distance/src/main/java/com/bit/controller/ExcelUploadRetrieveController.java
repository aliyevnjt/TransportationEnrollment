package com.bit.controller;


import com.bit.model.form_data.Address;
import com.bit.model.StudentInfo;
import com.bit.services.DistanceCalculatorService;
import com.bit.services.ExcelUploadService;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
public class ExcelUploadRetrieveController {

    @Autowired
    ExcelUploadService excelUploadService;

    @Autowired
    private DistanceCalculatorService distanceCalculatorService;

    @PostMapping("/api/distanceLocal")
    public ResponseEntity getDistanceLocal(@Valid @RequestBody StudentInfo studentInfo){
        Address addressFromExcel = new Address();
        addressFromExcel.setAddress(studentInfo.getAddress());
        addressFromExcel = excelUploadService.findOneAddress(addressFromExcel);
        double distance = excelUploadService.getDistanceFromAddresses(studentInfo,addressFromExcel);
        return new ResponseEntity(distanceCalculatorService.createStudent(studentInfo, distance), HttpStatus.OK);
    }

    @PostMapping("/api/uploadAddresses")
    public ResponseEntity mapReapExcelDatatoDB(@RequestParam("file") MultipartFile reapExcelDataFile)  {
        XSSFSheet worksheet = excelUploadService.getSheet(reapExcelDataFile);
        return excelUploadService.saveAllToAddresses(worksheet);
    }


}
