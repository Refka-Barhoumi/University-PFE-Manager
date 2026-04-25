Feature: Student Login
  As a student of FSTSBZ
  I want to login with my institutional email
  In order to access my PFE management space

  Scenario: Successful login with valid institutional email
    Given que je suis sur la page de connexion
    When je saisis l'email "ahmed@fstsbz.u-kairouan.tn"
    And je saisis le mot de passe "123456"
    And je clique sur "Se connecter"
    Then je suis redirigé vers le tableau de bord
    And je vois le message "Bienvenue"

  Scenario: Failed login with non-institutional email
    Given que je suis sur la page de connexion
    When je saisis l'email "test@gmail.com"
    And je saisis le mot de passe "123456"
    And je clique sur "Se connecter"
    Then je vois un message d'erreur