<%-- 
    Document   : ResetDocument
    Created on : 6-giu-2017, 16.12.28
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
    <%   
        Dbmanger.ResetDocument();
    response.sendRedirect("Admin_page.jsp");
    
    %>
</html>
