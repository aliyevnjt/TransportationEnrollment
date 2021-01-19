package com.bit.services;

import com.bit.model.form_data.AddresExcel;
import com.bit.repo.ExcelAddressRepo;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;


@Service
public class ExcelUploadService {

    @Autowired
    ExcelAddressRepo excelAddressRepo;

    public List<AddresExcel> writeExcelToDB(MultipartFile reapExcelDataFile) {
        List<AddresExcel> addresExcelList = new ArrayList<>();
        List<Map<String, Integer>> badLine = new ArrayList<>();
        XSSFSheet worksheet = getSheet(reapExcelDataFile);
        for (int i = 1; i < worksheet.getPhysicalNumberOfRows(); i++) {
            Map<String, Integer> map = new HashMap<>();
            try {
                Row row = worksheet.getRow(i);
                AddresExcel addresExcel = new AddresExcel();
                addresExcel.setAddress((int) row.getCell(0).getNumericCellValue() +
                        " " + row.getCell(1).getStringCellValue());
                addresExcel.setDistanceLMS(row.getCell(2).getNumericCellValue());
                addresExcel.setDistanceLHS(row.getCell(3).getNumericCellValue());
                addresExcel.setDistanceSLS(row.getCell(4).getNumericCellValue());
                addresExcel.setDistanceRSS(row.getCell(5).getNumericCellValue());
                addresExcelList.add(addresExcel);
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
        return addresExcelList;
    }

    public static XSSFSheet getSheet(MultipartFile reapExcelDataFile) {
        XSSFSheet worksheet = null;
        try {
            XSSFWorkbook xssfWorkbook = new XSSFWorkbook(reapExcelDataFile.getInputStream());
            worksheet = xssfWorkbook.getSheetAt(0);
        } catch (IOException e) {

        }
        return worksheet;
    }

    @Transactional
    public void saveToAddresses(List<AddresExcel> list){
        list.forEach(s -> excelAddressRepo.save(s));
    }

    @Transactional
    public void saveAllToAddresses(List<AddresExcel> list){
        excelAddressRepo.saveAll(list);
    }

    @Transactional
    public AddresExcel findOneAddress(AddresExcel addresExcel){
        ExampleMatcher ignoringExampleMatcher = ExampleMatcher.matchingAny()
                .withMatcher("address", ExampleMatcher.GenericPropertyMatchers.startsWith().ignoreCase())
                .withIgnorePaths("distanceRSS", "distanceSLS", "distanceLMS", "distanceLHS");
        AddresExcel addresExcel1 = excelAddressRepo.findOne(Example.of(addresExcel,ignoringExampleMatcher )).get();
    return addresExcel1;
    }
}
