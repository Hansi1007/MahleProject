<%-- 
    Document   : reset
    Created on : 24-mag-2017, 10.48.58
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
        Dbmanger.ResetWelcome();
    response.sendRedirect("Admin_page.jsp");
    
    %>
</html>
