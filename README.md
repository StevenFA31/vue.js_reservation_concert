# Contexte du projet

## La demande

Vous devez créer une application de consultation de festivals, et réservation de billets. L'application est constituée de cinq écrans :

1 - la liste des festivals permet d'accéder au second écran :
2 - le détail d'un festival, qui liste les artistes participants, et permet de prendre un billet via un bouton dédié.
3 - Lorsque l'on clique sur ce bouton, on accède à la troisième page de saisie des coordonnées : prénom, nom, adresse email.
4 - En validant ce formulaire, on accède à la quatrième page qui récapitule la réservation : festival, données personnelles et bouton de confirmation.
5 - L'utilisation de ce bouton enregistre la réservation dans le serveur et affiche une dernière page de confirmation de réservation et de remerciements !
​

### Contraintes

utilisation du framework VueJS
codage Typescript obligatoire
le site doit être adapté à tous types de terminaux communs
utilisation obligatoire de l'API fournie
​

### API disponibles (sans authenthification)

GET /api/artists (name, picture)
GET /api/events (title, from, to, place)
POST /api/reservations (firstname, lastname, email, placing, event)
​

## Le backend

L'API est une instance de Strapi. Elle est disponible à l'adresse suivante : http://localhost:1337 Vous pouvez administrer Strapi à l'adresse suivante : http://localhost:1337/admin

(identifiant achirot@simplon.co ; mot de passe @x34!bV3DD83\*RK)

​

### Mise en service

télécharger et extraire l'archive fournie
cd concert-api/
npm install
npm run develop
​

### API disponibles (sans authenthification)

GET /api/artists (name, picture)
GET /api/events (title, from, to, place)
POST /api/reservations (firstname, lastname, email, placing, event)
​

## Aide

installer un projet VueJS
plusieurs pages : le routing
le store Pinia
​

## Bonus

implémentez le Store Pinia
ajoutez une page qui affiche les réservations
​

## Modalités pédagogiques

travail à réaliser sur la semaine, en binômes

## Livrables

- dépôt GIT contenant les maquettes et le source du projet
- démo live au formateur le vendredi

## Ressources

Pièces jointes : API backend