<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Student Registration</title>
</head>
<body>

<div align="center">
    <h2>Student Registration</h2>
    <form:form action="register" method="post" modelAttribute="studentinfo">
        <form:label path="fname">First Name </form:label>
        <form:input path="fname"/>
        <form:label path="lname">Last Name </form:label>
        <form:input path="lname"/>
        <form:label path="address">Address</form:label>
        <form:input path="address"/>


        <form:button>Submit</form:button>
    </form:form>
</div>


</body>
</html>