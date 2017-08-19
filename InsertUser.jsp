<%-- 
    Document   : InsertUser
    Created on : 20-apr-2017, 9.38.11
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
<%!
        DateFormat tipe = new SimpleDateFormat("EEE, MMM d, ''yy");
        Calendar cal = Calendar.getInstance();
    %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
              <%  String email = request.getParameter("email");
              String psw = request.getParameter("psw");
              String item = request.getParameter("browser");
              %>
              

       
        <%  if(request.getParameter("psw-repeat").equals(request.getParameter("psw"))){
        Dbmanger.InsertUser( email, psw, item);
          out.print("l'Utente  è stato inserito  "); %>
          <jsp:include page="Admin_page.jsp" />;
        <%  }
          else{
            out.print("l'Utente non  è stato inserito  "); 
%>  
   <jsp:include page="Admin_page.jsp" /> ;
          <%}
        
        %>

    </body>
</html>
