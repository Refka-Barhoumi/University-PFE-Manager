package com.example.backend.stepdefinitions;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.*;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;
import static org.junit.Assert.*;

public class LoginSteps {

    private WebDriver driver;
    private WebDriverWait wait;

    @Before
    public void setUp() {
        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless");
        options.addArguments("--no-sandbox");
        options.addArguments("--disable-dev-shm-usage");
        driver = new ChromeDriver(options);
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    }

    @Given("que je suis sur la page de connexion")
    public void je_suis_sur_la_page_de_connexion() {
        driver.get("http://localhost:4200/login");
    }

    @When("je saisis l'email {string}")
    public void je_saisis_email(String email) {
        WebElement emailField = wait.until(
            ExpectedConditions.presenceOfElementLocated(By.cssSelector("input[type='email']"))
        );
        emailField.clear();
        emailField.sendKeys(email);
    }

    @And("je saisis le mot de passe {string}")
    public void je_saisis_mot_de_passe(String password) {
        WebElement passwordField = driver.findElement(
            By.cssSelector("input[type='password']")
        );
        passwordField.clear();
        passwordField.sendKeys(password);
    }

    @And("je clique sur {string}")
    public void je_clique_sur(String bouton) {
        WebElement btn = driver.findElement(By.cssSelector(".btn-login"));
        btn.click();
    }

    @Then("je suis redirigé vers le tableau de bord")
    public void je_suis_redirige_vers_dashboard() {
        wait.until(ExpectedConditions.urlContains("/dashboard"));
        assertTrue(driver.getCurrentUrl().contains("/dashboard"));
    }

    @And("je vois le message {string}")
    public void je_vois_le_message(String message) {
        wait.until(ExpectedConditions.presenceOfElementLocated(
            By.xpath("//*[contains(text(),'" + message + "')]")
        ));
        assertTrue(driver.getPageSource().contains(message));
    }

    @Then("je vois un message d'erreur")
    public void je_vois_message_erreur() {
        wait.until(ExpectedConditions.presenceOfElementLocated(
            By.cssSelector(".error-message")
        ));
        WebElement error = driver.findElement(By.cssSelector(".error-message"));
        assertTrue(error.isDisplayed());
    }

    @After
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}