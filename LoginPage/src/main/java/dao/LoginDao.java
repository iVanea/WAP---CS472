package dao;

public class LoginDao {
    // here we need to connect to DB
    //I simulate a connection with DB for 2 users

    public boolean checkMember(String usr, String pwd){
        boolean isUser= false;
        if ("admin".equals(usr) && "1q2w".equals(pwd) ) {
            isUser = true;
        }else if("q1".equals(usr) && "1".equals(pwd)) {
            isUser = true;
        }else {
            isUser = false;
        }

        return isUser;
    }
}
