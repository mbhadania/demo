<%-- 
    Document   : greeting
    Created on : Jan 28, 2016, 11:43:38 AM
    Author     : Miten Bhadania
--%>


<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page isELIgnored="false"%>


<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1> from jsp</h1>
        
    
      
        
        <%  String value=(String)request.getAttribute("name");
        
        %>
     
        
        <table>
 <c:forEach items="${json1}" var="person">
    <tr>
        <td>${person.id}</td>
        <td>${person.context}</td>
    </tr>
 </c:forEach>
</table>
         
    </body>
</html>
