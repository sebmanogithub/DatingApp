### Ajouter un thème via [bootswatch.com](http://bootswatch.com)

*npm install bootswatch*   
Modifier le fichier **angular.json** en choisissant le theme
```
"styles": [
        "./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css",
        "./node_modules/bootstrap/dist/css/bootstrap.min.css",
        "./node_modules/bootswatch/dist/zephyr/bootstrap.css",
        "./node_modules/font-awesome/css/font-awesome.css",
        "./node_modules/ngx-toastr/toastr.css",
        "src/styles.css"
]
```

### Implémentation d'un service de notifications contextuelles
Désigne les messages temporaires qui s'affichent en superposition à l'écran (souvent en bas ou en haut de l'interface) pour informer l'utilisateur.  
*npm install ngx-toastr*  
Ajouter au fichier **angular.json**  

### Création d'un guard
*ng g g auth --skip-tests*  
Interface canActivate activé  
Créé un booleen observable afin de savoir si un utilisateur est connecté

### Protéger les url dans `app-routing.module.ts`
A l'aide du authGuard crée
```
{
    path:'',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children:[
      {path: 'members', component: MemberListComponent},
      {path: 'members/:id', component: MemberDetailComponent},
    ]
  }
```

### Utiliser la balise ng-container qui contient des directives structurelles mais qui n'est pas rendue dans le DOM.
```
<ul>
    <ng-container *ngFor="let item of items">
        <li *ngIf="item.isValid">
            {{ item.name }}
        </li>
    </ng-container>
</ul>
```

### Création de `shared.module.ts`
Permet de **partager et regrouper les dépendances externes**, autres que les imports spécifiques à Angular, afin de les rendre disponibles au fichier `app.module.ts`



