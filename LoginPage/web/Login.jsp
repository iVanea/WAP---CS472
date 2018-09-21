<%--
  Created by IntelliJ IDEA.
  User: timotin
  Date: 9/20/18
  Time: 4:23 PM
  To change this template use File | Settings | File Templates.
--%>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%--<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core" %>--%>


<html>
<head>
    <style>
        #loginform{
            width: 500px;
            margin:auto;
            text-align: center;
        }
        .button {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
        }

        #warning{
            color: red;
            font-weight: bold;
            font-size:16px;
        }

        .login {width: 50%;}
    </style>
    <title>Login Form</title>
</head>
<body>
    <form action="/login" id="loginform" method="post">
        <label>User name:
            <input type='text' placeholder='type "admin"' name='usr' value="${cookie.userName.value}" />
        </label><br/>
        <label>Password:
            <input type='password' placeholder='1q2w' name='pwd'/>
        </label><br/>

        <label>Remember me
            <input type='checkbox' name='remember' value='yes'/>
            <%--doesnot work i got error 500 about conflict between dependencies.--%>
            <%--<c:if test="${cookie.containsKey('userName')}"> checked </c:if> --%>
        </label><br/>

        <input class="button login" type='submit' value='Login'/>

        <span id="warning">${error}</span>
    </form>

</body>
</html>
