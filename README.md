# ng-culqi

[![Build Status](https://travis-ci.org/lperezp/ng-culqi.svg?branch=master)](https://travis-ci.org/lperezp/ng-culqi)

Biblioteca para integrar Culqi a un proyecto de Angular 7/8. Esta biblioteca trabaja con la [v3.0](https://checkout.culqi.com/js/v3) de [Culqi Checkout](https://www.culqi.com/docs/#/pagos/checkout).

## Instalación

### Vía npm

* Descargamos el paquete mediante [npm](https://www.npmjs.com/). 

```
npm i ng-culqi
```

## Integración


* En primer lugar, declaremos el **NgCulqiModule** dentro del *app.module.ts*

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importamos el módulo de ng-culqi
import { NgCulqiModule } from 'ng-culqi';
 
@NgModule({
  imports: [
    CommonModule,
    NgCulqiModule // Añadimos el módulo en la propiedad imports:[]
  ],
  bootstrap: [],
  declarations: [App]
})
class MainModule {}
```

## Uso

* Luego tenemos que configurar Culqi, llenando información acerca del comercio como el **nombre del comercio**, **tu API KEY pública**. 

```
import { CulqiService } from 'ng-culqi';
 
@Component({...})
export class NombreDeTuComponente {
  constructor(private culqiSrv: CulqiService) {}
 
  ngOnInit() {
    this.culqiSrv.configCulqi('Nombre del Comercio', 'API_KEY');
  }
}
```

## Demo

```
git clone repositorio_example
cd culqi-angular/
npm install
ng serve -o
```

## Licencia

[Licencia MIT](LICENSE).
