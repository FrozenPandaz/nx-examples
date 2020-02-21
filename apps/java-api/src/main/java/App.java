package www.api;

import greeter.GreeterController;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.context.annotation.Import;


@SpringBootApplication
@RestController
@Import(GreeterController.class)
public class App {
  public static void main(String[] args) {
    SpringApplication.run(App.class, args);
  }
}
