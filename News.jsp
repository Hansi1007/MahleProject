<%-- 
    Document   : newjsp
    Created on : 6-mar-2017, 14.20.41
    Author     : M0023579
--%>

 
<!DOCTYPE html>
<%@page import="java.text.DateFormat"%>
<%@page import="java.io.DataInputStream"%>
<%@page import="java.io.DataInput"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.io.File"%>
<%@page import="java.util.Vector"%>
<%@ page import="java.util.Calendar" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
  
   <meta http-equiv="X-UA-Compatible" content="IE=11" />

<% if (session.getAttribute("nome") == null) { 
    
        response.sendRedirect("Home.jsp");
}
%> 
 

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Login</title>
        </head>
        
	<style>
	body {
             background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    background-image: url("faces/Image/bacground.jpg");
}
 
input, textarea {
    width:439px;
    height:27px;
    background:#efefef;
    border:1px solid #dedede;
    padding:10px;
    margin-top:3px;
    font-size:0.9em;
    color:#3a3a3a;
    -moz-border-radius:5px;
    -webkit-border-radius:5px;
    border-radius:5px;
}

        input:focus, textarea:focus {
    border:1px solid #97d6eb;
}
label {
    display:block;
    margin-top:20px;
    letter-spacing:2px;
}
/* Style the text boxes */
input, textarea {
	width:439px;
	height:27px;
	background:#efefef;
	border:1px solid #dedede;
	padding:10px;
	margin-top:3px;
	font-size:0.9em;
	color:#3a3a3a;
}

textarea {
	height:213px;
	 
}
 
/***SET THE BUTTON'S HOVER AND FOCUS STATES***/
input#bigbutton:hover, input#bigbutton:focus {
color:#dfe7ea;
/*reduce the size of the shadow to give a pushed effect*/
-webkit-box-shadow: inset 0px 1px 0px #3e9cbf, 0px 2px 0px 0px #205c73, 0px 2px 5px #999;
-moz-box-shadow: inset 0px 1px 0px #3e9cbf, 0px 2px 0px 0px #205c73, 0px 2px 5px #999;
box-shadow: inset 0px 1px 0px #3e9cbf, 0px 2px 0px 0px #205c73, 0px 2px 5px #999;
}
</style>
<body>

    <form  action="/Home/insertNews.jsp" method="post">
                   
    <h1><label>titolo</label></h1>
    <input name="titolo" type="text" placeholder="titolo" required>
            
     <h1><label>Message</label></h1>
     <textarea name="message" placeholder="Type Here" required></textarea>
           
    <br>
    <br>
    <br>
    
<input id="bigbutton" type="submit" value="Inserisci la news" />      
</form>

 
</body>
</html>
