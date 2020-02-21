package greeter;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/")
public class GreeterController {

  @GetMapping
  public String sayHello() {
    System.out.println("HELLO");
    return "Hello Taylor!";
  }
}
