<%-- 
    Document   : InsertWelcome
    Created on : 27-apr-2017, 15.18.28
    Author     : m0023579
--%>

 
 
    
 
 <%@page import="java.text.DateFormat"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
   <meta http-equiv="X-UA-Compatible" content="IE=11" />
   <!DOCTYPE html>
<html>
  
    <head>
            <% 
        int a=Integer.valueOf(request.getParameter("browser"));
        %>
 

 <%@ page import="java.util.*" %>	 
  <%@page import="Com.Dbmanger"%>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>jQuery UI Datepicker - Default functionality</title>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="/resources/demos/style.css">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script>
  $( function() {
    $( "#datepicker" ).datepicker({ dateFormat: 'dd-mm-yy' }).bind("change",function(){
            var minValue = $(this).val();
            minValue = $.datepicker.parseDate("dd-mm-yy", minValue);
            minValue.setDate(minValue.getDate()+1);
           ;
        })
    });
  </script>  

        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <style>
	body {
    background-image: url("faces/Image/bacground.jpg");
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
table, th, td {
    border: 2px solid black;
    border-collapse: collapse;
}
th, td {
    padding: 5px;
    text-align: left;    
}
</style>
    </head>
    
    <body>
     
  
            
   <div class="modal-content animate" >
    <div class="container" >
          <form  action="/Home/Insertnews2.jsp"  method="post" > 
        <input type="hidden" name="country" id="<%=a%>" value="<%=a%>">
       <%if(a==1){
        %>
       
             <table style="width:100%">
<tr>
     <th colspan="4">Telephone</th>
 
  </tr>
  <tr>
     <th colspan="4">
               <label><b> Name of the guest    </b></label>

               <input   style="width: 200px;" type="text" placeholder="name" name="ok" >

      <label><b> position of the guest   </b></label>
       
      <input  style="width: 200px;" type="text" placeholder="position" name="psw-repeat" >
      <label><b> Place of the  guest   </b></label>
       
      <input  style="width: 150px;" type="text" placeholder="place" name="p" >
     </th>
     </th>
 
  </tr>
  <tr>
     <td> <label><b>project name  </b></label>
         <input id="field11"  style="width: 200px;" type="text" placeholder=" project name " name="emai" required> </td>
    <td>     
  <label><b> Start date</b></label>
      <input id="field21" style="width: 200px;" type="text" placeholder="Start" name="ps" required ></td>
     <td>  <label><b> End Date </b></label>
         <input  id="field31" style="width: 200px;" type="text" placeholder="End" name="psw" required></td>
  </tr>
</table>
                   <script>
  $( function() {
    $( "#field21" ).datepicker({ dateFormat: 'dd-mm-yy' }).bind("change",function(){
            var minValue = $(this).val();
            minValue = $.datepicker.parseDate("dd-mm-yy", minValue);
            minValue.setDate(minValue.getDate()+1);
           ;
        })
    });
  </script>
      <script>
  $( function() {
    $( "#field31" ).datepicker({ dateFormat: 'dd-mm-yy' }).bind("change",function(){
            var minValue = $(this).val();
            minValue = $.datepicker.parseDate("dd-mm-yy", minValue);
            minValue.setDate(minValue.getDate()+1);
           ;
        })
    });
  </script>
        
         
  
          
        <%} else{%>
                  <form  action="faces/Insertnews2.jsp"  method="post" > 

                   <table style="width:100%">
<tr>
     <th colspan="4">Telephone</th>
 
  </tr>
  <tr>
     <th colspan="4">
               <label><b> Name of the guest  1  </b></label>

               <input   style="width: 200px;" type="text" placeholder="name" name="ok" >

      <label><b> position of the guest 1  </b></label>
       
      <input  style="width: 200px;" type="text" placeholder="position" name="psw-repeat" >
      <label><b> Place of the  guest  1 </b></label>
       
      <input  style="width: 150px;" type="text" placeholder="place" name="p" >
     </th>
     </th>
 
  </tr>
 
  <tr>
     <td> <label><b>project name 1 </b></label>
      <input id="field11"  style="width: 200px;" type="text" placeholder=" project name " name="emai" required ></td>
    <td>     
  <label><b> Start date</b></label>
      <input id="field21"  style="width: 200px;" type="text" placeholder="Start" name="ps" required ></td>
     <td>  <label><b> End Date </b></label>
      <input  id="field31" style="width: 200px;" type="text" placeholder="End" name="psw" required ></td>
  </tr>
      <script>
  $( function() {
    $( "#field21" ).datepicker({ dateFormat: 'dd-mm-yy' }).bind("change",function(){
            var minValue = $(this).val();
            minValue = $.datepicker.parseDate("dd-mm-yy", minValue);
            minValue.setDate(minValue.getDate()+1);
           ;
        })
    });
  </script>
      <script>
  $( function() {
    $( "#field31" ).datepicker({ dateFormat: 'dd-mm-yy' }).bind("change",function(){
            var minValue = $(this).val();
            minValue = $.datepicker.parseDate("dd-mm-yy", minValue);
            minValue.setDate(minValue.getDate()+1);
           ;
        })
    });
  </script>
 </table>
        <br>
      <br>
      <br>
         <%for(int i=2 ; i<=a ; i++){ %> 
 
         
         <table style="width:100%">
<tr>
     <th colspan="4">Telephone</th>
 
  </tr>
  <tr>
     <th colspan="4">
               <label><b> Name of the guest  <% out.print(i); %>  </b></label>

               <input   style="width: 200px;" type="text" placeholder="name" name= "name<%out.print(i);%>" >

      <label><b> position of the guest <% out.print(i); %>  </b></label>
       
      <input  style="width: 200px;" type="text" placeholder="position" name="position<%out.print(i);%>" >
      
      <label><b> Place of the  guest <% out.print(i); %>  </b></label>
       
      <input  style="width: 150px;" type="text" placeholder="place" name="place<%out.print(i);%>" >
     </th>
   </tr>
  <tr>
       
     <td> <label><b>project name <% out.print( i); %> </b></label>
      <input id="field1<%out.print(i);%>"  style="width: 200px;" type="text" placeholder=" project name " name="field1<%out.print(i);%>" required></td>
    <td>    
   <label><b> Start date</b></label>
      <input id="field2<%=i%>" data-date-format="dd-mm-yyyy" style="width: 200px;" type="text" placeholder="Start" name="field2<%out.print(i);%>" ></td>
     <td>  <label><b> End Date </b></label>
      <input  id="field3<%=i%>" style="width: 200px;" type="text" placeholder="End" name="field3<%out.print(i);%>" required ></td>
      <script>
  $( function() {
    $( "#field2<%=i%>" ).datepicker({ dateFormat: 'dd-mm-yy' }).bind("change",function(){
            var minValue = $(this).val();
            minValue = $.datepicker.parseDate("dd-mm-yy", minValue);
            minValue.setDate(minValue.getDate()+1);
           ;
        })
    });
  </script>  
       <script>
  $( function() {
    $( "#field3<%=i%>" ).datepicker({ dateFormat: 'dd-mm-yy' }).bind("change",function(){
            var minValue = $(this).val();
            minValue = $.datepicker.parseDate("dd-mm-yy", minValue);
            minValue.setDate(minValue.getDate()+1);
           ;
        })
    });
  </script>
  </tr>
</table>
   <input type="button" id="botton<%=i%>" name="submit_id" value="Helper" />  
    
<script>
$("#botton<%=i%>").click(function() {
   document.getElementById("field1<%=i%>").value = document.getElementById("field1<%=i-1%>").value; 
   document.getElementById("field2<%=i%>").value = document.getElementById("field2<%=i-1%>").value; 
   document.getElementById("field3<%=i%>").value = document.getElementById("field3<%=i-1%>").value; 

});
</script>
      <br>
      <br>
      <br>
       <%
}
       
}

       %>
        
      <div class="clearfix">
       </div>
  
         <input id="bigbutton" style="width: 300px;height: 50px; color: #ffffff ; background: #4CAF50 " type="submit" value="Inserisci il Welcome" />          
        </form>  
 
    </div>
    
     
    </body>
</html>
