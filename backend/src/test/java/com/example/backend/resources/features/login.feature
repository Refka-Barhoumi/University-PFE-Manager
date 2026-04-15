# language: fr
Fonctionnalité: Connexion étudiant
  En tant qu'étudiant de FSTSBZ
  Je veux me connecter avec mon email institutionnel
  Afin d'accéder à mon espace de gestion des PFE

  Scénario: Connexion réussie avec un email institutionnel valide
    Étant donné que je suis sur la page de connexion
    Quand je saisis l'email "ahmed@fstsbz.u-kairouan.tn"
    Et je saisis le mot de passe "123456"
    Et je clique sur "Se connecter"
    Alors je suis redirigé vers le tableau de bord
    Et je vois le message "Bienvenue"

  Scénario: Connexion échouée avec un email non institutionnel
    Étant donné que je suis sur la page de connexion
    Quand je saisis l'email "test@gmail.com"
    Et je saisis le mot de passe "123456"
    Et je clique sur "Se connecter"
    Alors je vois un message d'erreur