<%-- 
    Document   : delete
    Created on : 11-mag-2017, 11.51.43
    Author     : m0023579
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
           <%@page import="Com.Dbmanger"%>
        <title>JSP Page</title>
    </head>
    <%   Dbmanger.deleteWelcome();
    response.sendRedirect("refresh.jsp");
    
    %>
</html>
