package model.Customer;

import dbUtils.*;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class StringDataList {

    public String dbError = "";
    private ArrayList<StringData> recordList = new ArrayList();

    // Default constructor just leaves the 2 data members initialized as above
    public StringDataList() {
    }

    // overloaded constructor populates the list (and possibly the dbError)
    public StringDataList(String countryNameStartsWith, DbConn dbc) {

        StringData sd = new StringData();

        System.out.println("Searching for countries that start with " + countryNameStartsWith);

        try {

            String sql = "SELECT * FROM Customer "
                    + " WHERE Cust_FirstName OR Cust_LastName LIKE ? ORDER BY Cust_ID";

            PreparedStatement stmt = dbc.getConn().prepareStatement(sql);
            stmt.setString(1, countryNameStartsWith + "%");
            ResultSet results = stmt.executeQuery();

            while (results.next()) {
                try {
                    sd = new StringData();
                    sd.Cust_ID = FormatUtils.formatInteger(results.getObject("Cust_ID"));
                    sd.Cust_Email = FormatUtils.formatString(results.getObject("Cust_Email"));
                    sd.Cust_Password = FormatUtils.formatString(results.getObject("Cust_Password"));
                    sd.Cust_Nickname = FormatUtils.formatString(results.getObject("Cust_Nickname"));
                    sd.Cust_FirstName = FormatUtils.formatString(results.getObject("Cust_FirstName"));
                    sd.Cust_LastName = FormatUtils.formatString(results.getObject("Cust_LastName"));
                    sd.Cust_Image = FormatUtils.formatString(results.getObject("Cust_Image"));
                    this.recordList.add(sd);
                } catch (Exception e) {
                    sd.errorMsg = "Record Level Error in model.CountryFlag.StringDataList Constructor: " + e.getMessage();
                    this.recordList.add(sd);
                }
            } // while
        } catch (Exception e) {
            this.dbError = "List Level Error in model.CountryFlag.StringDataList Constructor: " + e.getMessage();
        }
    } // method

} // class
