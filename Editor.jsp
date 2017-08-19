<%-- 
    Document   : newjsp
    Created on : 6-mar-2017, 14.20.41
    Author     : M0023579
--%>

 
<!DOCTYPE html>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<meta http-equiv="X-UA-Compatible" content="IE=11" />
<%@page import="java.text.DateFormat"%>
<%@page import="java.io.DataInputStream"%>
<%@page import="java.io.DataInput"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.io.File"%>
<%@page import="java.util.Vector"%>
<%@ page import="java.util.Calendar" %>
 
   <link rel="stylesheet" href="faces/css/style.css">
   <meta http-equiv="X-UA-Compatible" content="IE=11" />

<% if (session.getAttribute("nome") == null) { 
    
        response.sendRedirect("Home.jsp");
}
%> 
<%!
        DateFormat tipe = new SimpleDateFormat("EEE, MMM d, ''yy");
        Calendar cal = Calendar.getInstance();
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
	</style>
     
        <body id = "body" onload="myFunction()">
            <form action="Upload" method="post" enctype="multipart/form-data">
    <div class="login-page">
  <div class="form">
      <%
      String savefile = new String();
      String contentType = request.getContentType();
      
if((contentType != null )&& (contentType.indexOf("multipart/form-data")>= 0)){
   DataInputStream in = new DataInputStream(request.getInputStream());
   
       int dataFormatLength = request.getContentLength();
       byte dataByte[] = new byte[dataFormatLength];
       int byteRead = 0 ;
       int totalbyteRead = 0 ;
       while (totalbyteRead < dataFormatLength) {               
               byteRead = in.read(dataByte,totalbyteRead,dataFormatLength);
               
           }

      }
      
      
      %>
      <input type="text"  name="titolo"  placeholder="Titolo al documento" required/>
      
<input type="file" id="file" name ="file" multiple size="50" onchange="myFunction()">

<p id="demo"></p>
    
<script>
function myFunction(){
    var x = document.getElementById("myFile");
    var txt = "";
    if ('files' in x) {
        if (x.files.length == 0) {
            txt = "Select one or more files.";
        } else {
            for (var i = 0; i < x.files.length; i++) {
                txt += "<br><strong>" + (i+1) + ". file</strong><br>";
                var file = x.files[i];
                if ('name' in file) {
                    txt += "name: " + file.name + "<br>";
                }
                if ('size' in file) {
                    txt += "size: " + file.size + " bytes <br>";
                }
            }
        }
    } 
    else {
        if (x.value == "") {
            txt += "Select one or more files.";
        } else {
            txt += "The files property is not supported by your browser!";
            txt  += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
        }
    }
    document.getElementById("demo").innerHTML = txt;
}
</script>

        <button>submit</button>
    
  </div>
</div>
</form>
 </form>
         
     
    </body>
    <script src="faces/js/index.js"></script>
</html>
