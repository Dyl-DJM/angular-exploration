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



### Composants

Un composant est une brique d'une application Angular, il est constitué de 3 parties : 

- template : la représentation visuelle
- la classe : la logiqie
- le décorateur @Component qui spécifie les métadonnées pour le composant comme son sélecteur, le chemin vers le fichier de template et le chemin vers les styles



#### Propriétés du décorateur @Component

- selector : identifiant du composant dans les balises HTML
- standalone : Quand cette propriété est à true, elle indique qu'aucun module Angular externe n'est nécessaire pour que ce composant fonctionne. 
- imports : liste les autres composants, directives ou module utilisé dans le composant
- template(Url) : défini le HTML associé au composant


#### Cycle de détection de changement

Processus automatisé par lequel Angular vérifie les modifications dans les données de l'application qui affectent l'interface utilisateur. Angular manipule lui-même le DOM.

On ne doit pas manipuler nous même le DOM pour 3 raisons : 

- sécurité : cela peut ouvrir des vulnérabilités comme les attaques XSS(cross site scripting)
- perfs : Angular optimise le cycle de détection de changement pour réduire au max les opération DOM qui sont coûteuses.-
- Maintenabilité : le code qui manipule le DOM peut être plus complexe à comprendre et maintenir


#### Fichiers de tests .specs.ts

Ces fichiers permettent d'écrire les tests unitaires


#### Interpolation

Cette syntaxe permet d'insérer des données  dynamiques dans le HTML

```
template : "Hello, {{title}}"
```

#### HTML dynamique

l'attribut [value] d'un \<input> permet de lier une propriété de la classe typescript au template. le problème c'est que si l'utilisateur modifie la valeur, elle ne changera pas dans la classe ts.

#### Gestiond es évènements

Les évènements ont une syntaxe 'binding d'évènement' 

```
()
```

Par exemple, (click) écoute l'évènement de clic et une fois activé, peut par exemple appelé une fonction : 

```
<button (click)="search()">Rechercher</button>
```


#### Liaison bidirectionnelle

On utilise la directive : ngModel (dans FormsModule)

la syntaxe [(ngModel)] est appelée "banana in a box" à cause du [()] qui combine le binding de propriété [] et le binding d'évènement ().




### Directives

Les directives sont des instructions qui permettent de manipuler le DOM, d'ajouter des comprotements interactifs et de créer des composants réutilisables dans une app Angular. Il faut imaginer les directives comme des assistants qui aident à manipuler les éléments d'une page de manière dynamique et réactive. On peut dire que cela améliore les capacités de l'élément HTML.

Une directive est un sélecteur (élément, classe ou attribut HTML) Angular qui permet de manipuler le DOM de manière dynamiqueet réactive. Elle ajoute des fonctionnalités aux éléments HTML, leur permettant de de réagir aux changements de données et d'interagir avec l'utilisateur.

#### ngClass

TailwindCSS utilise des classes pour la création de styles, il peut-être très complqiué de gérer les chaînes de caractères. On peut dans ce cas utiliser ngClass pour modifier conditionnellement la valeur de la classe d'un élément HTML.

- Simple : permet de définir des règles complexes de manière lisible et maintenable sans jongler avec des chaînes de caractères
- Flexibilité : il est facile d'ajouter ou retirer des classes en fonction de multiples conditions ou étas de composants
- Puissance : avec ngClass gérer des bibliothèques complexes comme Tailwind devient un jeu d'enfant.
  
Rappel : Une classe CSS est définie dans un fichier CSS avec la syntaxe : 

```css
.myClassForBackgrounds {
    background-color : green;
}
```

#### ngStyle

Définis des styles CSS de manière dynamique. Fonctionne comme ngClass mais agit sur des styles CSS au lieu des classes CSS.


Dans ngStyle la clé correspond au nom de la propriété CSS et la valeur correspond à la valeur CSS.



