package com.login;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebFilter(filterName = "ValidFilter",  urlPatterns = {"/welcome"})
public class ValidFilter implements Filter {
    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
//        chain.doFilter(req, resp);

        PrintWriter out = resp.getWriter();

        System.out.println("Filter");

        HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) resp;
        HttpSession session = request.getSession(true);

        String username = (String)session.getAttribute("userName");
        if(username==null || username.length()==0){
            response.sendRedirect("Login.jsp");
            session.setAttribute("warning","inserted username and/or password are wrong");
        }else{
            chain.doFilter(req, resp);
        }

    }
    public void init(FilterConfig config) throws ServletException {

    }

}
