<%-- 
    Document   : insertNews
    Created on : 20-apr-2017, 12.38.26
    Author     : m0023579
--%>
 <%@page contentType="text/html" pageEncoding="UTF-8"%>
 <meta http-equiv="X-UA-Compatible" content="IE=11" />
<%@page import="java.text.DateFormat"%>
<%@page import="java.io.DataInputStream"%>
<%@page import="java.io.DataInput"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.io.File"%>
<%@page import="java.util.Vector"%>
<%@ page import="java.util.Calendar" %>
<%@page import="Com.Dbmanger"%>
<% if (session.getAttribute("nome") == null) { 
    
        response.sendRedirect("Home.jsp");
}
%> 
 
 <!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        
        <% 
            request.setCharacterEncoding("UTF-8");
            
            String titolo = request.getParameter("titolo");
        out.print(titolo);
              String contenuto = request.getParameter("message");
              String mitente = session.getAttribute("nome").toString();
              String categoria = session.getAttribute("categoria").toString();
              Dbmanger.InsertNews(titolo, mitente, categoria, contenuto);
               %>
    </body>
</html>
