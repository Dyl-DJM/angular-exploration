# Journal de bord

## Initialisation

### Fichiers de configuration

- package.json : carte d'identité du projet. Contient des informations comme la version, l'auteur, détaille toutes les dépendances nécessaires pour développer et exécuter l'application

- tsconfig.json : contient les réglages pour le compilateur TypeScript, spécifiant comment le code TS est converti en JS. il inclut des options pour le contrôle de la sortie du compilateur, la configuration des chemins d'accès etc..

- angular.json : Configure les aspects de l'outil AngularCLI. Il définit comment l'application est construite, servie et déployée. Il inclut des configurations pour les environnements de développement et de production, ainsi que pour l'intégration de bibliothèques tierces.

- ng generate environments : génère les environnements



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