<%-- 
    Document   : greeting
    Created on : Jan 28, 2016, 11:43:38 AM
    Author     : Miten Bhadania
--%>


<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<%@ page isELIgnored="false"%>
<!DOCTYPE web-app PUBLIC
 "-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN"
 "http://java.sun.com/dtd/web-app_2_3.dtd" >
<head>
    <title>Getting Started: Handling Form Submission</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head>
<body>
	<h1>Form</h1>

       
        
       

        <form action="${pageContext.request.contextPath}/greeting" method="post" >
            <input name="id"  type="text"/>
            <input name="content"  type="text"/>
            <button type="submit">submit</button>
            
        </form>
</body>
</html>
</html>
