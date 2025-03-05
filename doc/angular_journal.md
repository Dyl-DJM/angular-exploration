# Journal de bord

## Initialisation

### Fichiers de configuration

- package.json : carte d'identité du projet. Contient des informations comme la version, l'auteur, détaille toutes les dépendances nécessaires pour développer et exécuter l'application

- tsconfig.json : contient les réglages pour le compilateur TypeScript, spécifiant comment le code TS est converti en JS. il inclut des options pour le contrôle de la sortie du compilateur, la configuration des chemins d'accès etc..

- angular.json : Configure les aspects de l'outil AngularCLI. Il définit comment l'application est construite, servie et déployée. Il inclut des configurations pour les environnements de développement et de production, ainsi que pour l'intégration de bibliothèques tierces.

- ng generate environments : génère les environnements
- ng new [name] : créer une nouvelle application
- ng serve : construit l'application  et lance un serveur web
- ng build : compile l'application dans le dossier dist/
- ng test : exécute les tests unitaires via Karma
- ng e2e : exécute les tests end to end
- ng generate component [name] : Génère un nouveau composant
- ng generate service [name] : Génère un nouveau service
- ng generate module [name] : Génère un nouveau module
- ng update : Met à jour les dépendance du projet Angular
- ng lint : Analayse le code de l'app pour des erreurs potentielles
  

--port pour ng serve permet de désigner un port
--open avec ng serve permet d'ouvrir directmeent l'app
--include avec ng test inclut des tests spécifiques  dans l'exécution
--skip-tests : (avec ng generate) : génère un composant sans fichier de test
--dry-run (ng generate (n'importe lequel)) : affiche les fichiers quis eront créés ou modifiés


### Fichiers d'environnements


Dans le code on récupère les variables d'environnements comme suit

```
export const environment = {
    production : false,
    apiURL : 'https://monapi.production/' 
}
```


```
import {environment} from './environments.environment';

console.log(environment.apiURL);
```


La commande suivante permet de build avec la configuration d'environnement souhaitée
```
ng build --configuration=production
```