<%-- 
    Document   : newjsp
    Created on : 6-mar-2017, 14.20.41
    Author     : M0023579
--%>
 <%@page import="Com.GetFiles"%>
 
 

    

<!DOCTYPE html>

<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.io.File"%>
<%@page import="java.util.Vector"%>
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<%@page contentType="text/html" pageEncoding="UTF-8"%>
       <link rel="stylesheet" href="faces/css/jquery.dataTables.min.css">
        <script src="faces/js/index2.js"></script>
        <script src="faces/js/index3.js"></script>
       <link rel="stylesheet" href="faces/css/style.css">
 
      

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Login</title>
        </head>
        
	<style>
 
th {
    border-bottom: 1px solid #d6d6d6;
}

tr:nth-child(even) {
    background: #e9e9e9;
}
	</style>
          <%
              GetFiles file = new GetFiles();
             Vector l_Files = new Vector();  
             Vector filepath = new Vector();
            Vector filedata = new Vector();
             Vector filenome = new Vector();
              Vector filenumero = new Vector();

    File l_Directory = new File("D:\\glassfish4\\glassfish\\domains\\domain1\\applications\\Home\\ProgrammaMacchina");
      File[] l_files = l_Directory.listFiles(); 
       file.GetDirectory("D:\\glassfish4\\glassfish\\domains\\domain1\\applications\\Home\\ProgrammaMacchina",filepath, filedata,filenome,filenumero );

            //folders should be left out... 
            //for( int a = 0 ; a<l_Folders.size() ; a++ ) 
            //out.println( "[<b>"+l_Folders.elementAt(a).toString() + "</b>]<br>") ; 

            //generate files as XML 
        
        %> 
        
        <body id="body">
            
<div data-role="page"  id="pageone" style="height:10px;"  >
  <div data-role="header" >
    <h1> Filtro Programma macchina
        </h1>
  </div>
  
  <div data-role="main" class="ui-content">
    <form>
      <input id="filterTable-input" data-type="search" placeholder="Ricerca macchina...">
    </form>
       <table data-role="table" data-mode="columntoggle" class="ui-responsive ui-shadow" id="myTable" data-filter="true" data-input="#filterTable-input">
       <thead>
        <tr>
          <th data-priority="6">Programma macchina </th>
          <th>Numero macchina</th>
          <th data-priority="1">Ultimo aggiornamento</th>
          <th data-priority="2">link al programma</th>
 
        </tr>
        
      </thead>
      <tbody  width = "200">
  <% for (int a = 0; a < l_files.length; a++) { %>
             <tr>
          <td><% out.print(filenome.get(a) ); %></td>
          <td><%out.print(filenumero.get(a)+ "  ");%></td>
          <td><%out.print(filedata.get(a)+ "  ");%></td>
          <%  String path ="ProgrammaMacchina/"+filepath.get(a); 
        %>
            <td> <a href="<%=path%>"  target="_blank" > programma </a><br></td>
     
        </tr>      
             <% //  out.print(filenome.get(a)+ "    ");
             //   out.print(filenumero.get(a)+ "  ");
             //  out.print(filepath.get(a)+ "  ");
     // <a href="C:\LOGS\test "<% filepath.get(a);/
             %>
 
<%} %>
 
      </tbody>
    </table>
  </div>

  <div data-role="footer">
    <h1>Footer Text</h1>
  </div>
</div>  
        </body>
</html>
