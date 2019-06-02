import java.util.*;
import java.time.*;

public class Lunch {

  public static boolean isSeafoodDonSale(int day) {
    if (day % 10 == 0) {
      return true;
    } else {
      return false;
    }
  }

  public static void main(String[] args) {
    System.out.println("Lunch");
    List<String> list = new ArrayList<>();
    list.add("sandwich");
    list.add("riceball");
    list.add("noodle");
    list.add("curry");
    int count = 15;
    for (int i = 0; i < count; i++) {
      LocalDate day = LocalDate.now().plusDays(i);
      String lunch = null;
      if (isSeafoodDonSale(day.getDayOfMonth())) {
        lunch = "seafood don";
      } else {
        Random rand = new Random();
        int num = rand.nextInt(list.size());
        lunch = list.get(num);
      }
      System.out.println("day: " + day);
      System.out.println("lunch: " + lunch);
      System.out.println("==");
    }
  }

}
