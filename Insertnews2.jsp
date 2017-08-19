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
  
<!DOCTYPE html>
<% if (session.getAttribute("nome") == null) { 
    
        response.sendRedirect("Home.jsp");
}
%> 
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        
        <% 
              request.setCharacterEncoding("UTF-8");
            
            int a=Integer.valueOf(request.getParameter("country"));
            
            
            if(a==1){
                 
            String ok = request.getParameter("ok");
             String ok1 = request.getParameter("psw-repeat");
             String ok2 = request.getParameter("p");
             String ok3 = request.getParameter("emai");
             String ok4 = request.getParameter("ps");
             String ok5 = request.getParameter("psw");
           
            Dbmanger.InsertWelcome(ok,ok1,ok2,ok3,ok4,ok5);
            }
            
            if(a>1){
              Dbmanger.InsertWelcome(request.getParameter("ok"),request.getParameter("psw-repeat"),request.getParameter("p"),request.getParameter("emai"),request.getParameter("ps"),request.getParameter("psw"));
            
             for(int i=2 ; i<=a ; i++){ 
   Dbmanger.InsertWelcome(request.getParameter("name"+i),request.getParameter("position"+i),request.getParameter("place"+i),request.getParameter("field1"+i),request.getParameter("field2"+i),request.getParameter("field3"+i));
        
              
             }
            }
             
                               

          response.sendRedirect("refresh.jsp");  
 
 %>
  
    </body>
</html>
