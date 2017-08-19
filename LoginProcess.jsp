<%-- 
    Document   : LoginProcess
    Created on : 6-mar-2017, 14.59.41
    Author     : M0023579
--%>
 <%@page import="Com.Bean"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ page import="java.util.*" %>
<%@page import="Com.LoginControl"%>
<%@page import="Com.Dbmanger"%>
<jsp:useBean id="obj" class="Com.Bean"> </jsp:useBean>
 

<%
obj.setNome(request.getParameter("username"));
obj.setPass(request.getParameter("password"));
%>
 
      
                <%   
        boolean status=LoginControl.validate(obj);  
        
if(status){  
    String name = Dbmanger.Categoria(obj.getNome());
    if(name.equals("Admin")){
session.setAttribute("session","TRUE");  
session.setAttribute("nome", obj.getNome());
session.setAttribute("categoria", "Admin");
 response.sendRedirect("faces/Admin_page.jsp");
    }
     else if(name.equals("Editors")){
             
session.setAttribute("session","TRUE"); 
session.setAttribute("nome", obj.getNome());
session.setAttribute("categoria", "Editors");
response.sendRedirect("faces/Editor.jsp");   
     }
  else if(name.equals("News")){
session.setAttribute("session","TRUE"); 
session.setAttribute("nome", obj.getNome());
session.setAttribute("categoria", "News");
response.sendRedirect("faces/News.jsp"); 
  
  }
  
  
  }  

 
else{
request.setAttribute("errorMessage", "Invalid user or password");
%>    
 
<%@include file="Login.jsp" %>

<%
 }
 
%>  


