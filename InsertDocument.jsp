<%-- 
    Document   : InsertDocument
    Created on : 20-mar-2017, 13.44.18
    Author     : M0023579
--%>

<%@page import="Com.Dbmanger"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ page import="java.util.*" %>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    
        
       <% 
           
           Dbmanger.del();
                      Dbmanger.InsertFolder();

     //  System.out.println(filepart);
         //  out.println(filepart);
     //   InputStream fileContent = filepart.getInputStream();
      response.sendRedirect("Home.jsp");
       %>
    
</html>
