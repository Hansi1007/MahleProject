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
    background-image: url("faces/Image/bacground1.jpg");
}
/* Full-width input fields */
input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

/* Set a style for all buttons */
button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
}

/* Extra styles for the cancel button */
.cancelbtn {
    padding: 14px 20px;
    background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn,.signupbtn {float:left;width:50%}

/* Add padding to container elements */
.container {
    padding: 16px;
}

/* The Modal (background) */
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    padding-top: 60px;
}

/* Modal Content/Box */
.modal-content {
    background-color: #fefefe;
    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button (x) */
.close {
    position: absolute;
    right: 35px;
    top: 15px;
    color: #000;
    font-size: 40px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: red;
    cursor: pointer;
}

/* Clear floats */
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 200px) {
    .cancelbtn, .signupbtn {
       width: 100%;
    }
}
</style>
<body>

 
  
    <button  onclick="window.location.href='faces/reset.jsp'" >Reset Welcome </button>
      <button  onclick="window.location.href='faces/ResetDocument.jsp'" >Reset Document </button>
    
<button  onclick="document.getElementById('id01').style.display='block'">Aggiungi un nuovo Utente </button>

<div id="id01" class="modal" >
  <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">×</span>
  <form class="modal-content animate" action="faces/InsertUser.jsp" method="post">
    <div class="container" >
      <label><b>Email</b></label>
      <input  type="text" placeholder="Enter Email" name="email" required>

      <label><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>

      <label><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
 
      <label><b>Categoria dell'utente </b></label> 
<input list="browsers" name="browser">
  <datalist id="browsers">
    <option value="Admin">
    <option value="Editors">
    <option value="News">
    <option value="Mensa">
  </datalist>
<br>
<br>
 
      <div class="clearfix">
        <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Torna</button>
        <button type="submit" class="signupbtn">Inserisci</button>
      </div>
    </div>
  </form>
</div>
<br>

 <button onclick="document.getElementById('id02').style.display='block'" > Numero di Gruppi </button>

<div id="id02" class="modal">
  <span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">×</span>
  <form class="modal-content animate" action="faces/InsertWelcome.jsp" method="post">
    <div class="container">
    
 
      <label><b> Insert guest Number </b></label> 
   <input  type="text" placeholder="Guest Number " name="browser" required>

<br>
<br>
 
      <div class="clearfix">
         <button type="submit" class="signupbtn">Sign Up</button>
      </div>
    </div>
  </form>
</div>
<script>
// Get the modal
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modal2) {
        modal.style.display = "none";
    }
}
</script>
</body>
</html>
