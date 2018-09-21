package com.login;

import dao.LoginDao;
import sun.rmi.log.LogOutputStream;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.io.Console;
import java.io.IOException;
import java.io.PrintWriter;

public class LoginServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        String userName =  req.getParameter("usr");
        String pass = req.getParameter("pwd");
        String remembered = req.getParameter("remember");
        LoginDao dao = new LoginDao();
        if (dao.checkMember(userName,pass)){
            HttpSession session = req.getSession();
            session.setAttribute("userName", userName);


            int hoursOneDay = 24;
            int seccondsOneHour = 3600;
            int dayOneMonth = 30;
            int secondsOneMonth = dayOneMonth*seccondsOneHour*hoursOneDay;
            if("yes".equals(remembered)){
                System.out.println("YES");
                Cookie cookie = new Cookie("userName", userName);
                cookie.setMaxAge(secondsOneMonth);
                resp.addCookie(cookie);
            }else {
                System.out.println("No");
                Cookie cookie = new Cookie("userName", userName);
                cookie.setMaxAge(0);
                resp.addCookie(cookie);
            }
            resp.sendRedirect("Welcome");
        }else{
            resp.sendRedirect("Login.jsp");
            resp.getWriter().println("Inserted user and/or password was incorrect!");
        }
    }
}
