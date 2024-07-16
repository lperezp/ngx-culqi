<p align="center">
    <img width="230" src="https://i.ibb.co/3B95v9S/icon-ngx-culqi.png">
</p>

<h1 align="center">
ngx-culqi
</h1>

<div align="center">

UNOFFICIAL [Culqi](https://culqi.com/) payment gateway library made to use with Angular by [lperezp.dev](https://lperezp.dev/?utm_source=ngx-culqi&utm_medium=readme&utm_campaign=ngx-culqi&utm_id=github)

[![Github branch](https://github.com/lperezp/culqi-angular/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/lperezp/culqi-angular/actions/workflows/pages/pages-build-deployment/badge.svg)
[![CodeFactor](https://www.codefactor.io/repository/github/lperezp/ngx-culqi/badge?style=flat-square)](https://www.codefactor.io/repository/github/lperezp/ngx-culqi)
[![GitHub Release Date](https://img.shields.io/github/release-date/lperezp/ngx-culqi.svg?style=flat-square)](https://github.com/lperezp/ngx-culqi/releases)
[![npm package](https://img.shields.io/npm/v/ngx-culqi.svg?style=flat-square)](https://www.npmjs.org/package/ngx-culqi)
[![NPM downloads](http://img.shields.io/npm/dm/ngx-culqi.svg?style=flat-square)](https://npmjs.org/package/ngx-culqi)
[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/lperezp/ngx-culqi/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Twitter](https://img.shields.io/badge/Twitter-lperezp_pe-blue.svg?style=flat-square&logo=twitter)](https://twitter.com/lperezp_pe)

</div>

## Demo

 [Ver Demo](https://lperezp.github.io/culqi-angular/)

## ☀️ License

[MIT](https://github.com/lperezp/ngx-culqi/blob/master/LICENSE)

## 🖥 Environment Support

* Angular `^18.0.0` [![npm package](https://img.shields.io/npm/v/ngx-culqi.svg?style=flat-square)](https://www.npmjs.org/package/ngx-culqi)

## 📦 Installation

Adding ngx-culqi to your project is as simple as running one command:

```
npm i ngx-culqi
```

## 🔨 Usage


```
import { ICulqiOptions, IOrderCulqiResponse, NgxCulqiService } from 'ngx-culqi';

@Component({...})
export class YourComponent {
  constructor(private ngxCulqiService: NgxCulqiService) {}

  paymentCulqi(): void {
    const order = {
      "amount": 1000,
      "currency_code": "",
      "description": "",
      "order_number": 00001,
      "client_details": {
        "first_name": "",
        "last_name": "",
        "email": "",
        "phone_number": ""
      },
      "expiration_date": (Math.floor(Date.now() / 1000) + 86400),
      "confirm": false
    };

    this.ngxCulqiService.generateOrder(order).subscribe((response: Partial<IOrderCulqiResponse>) => {
      const culqiSettings = {
        title: order.description,
        currency: 'PEN',
        amount: order.amount,
        order: response.id,
        xculqirsaid: environment.xculqirsaid,
        rsapublickey: environment.rsapublickey
      };

      const culqiOptions: ICulqiOptions = { style: this.styleCulqi };
      this.ngxCulqiService.generateToken(culqiSettings, culqiOptions);
    });
  }
}
```



Inside ``ngOnInit`` add the following script:

```
    ngOnInit(): void {
    this.ngxCulqiService.loadScriptCulqi(environment.tokenCulqi, environment.apiKeyCulqi);
    this.ngxCulqiService.tokenCreated$.subscribe(value => {
      if (value) {
        this.showToken(value);
        this.ngxCulqiService.closeCulqi();
      }
    });

    this.ngxCulqiService.orderCreated$.subscribe(value => {
      if (value) {
        this.showOrder(value);
      }
    });
  }
```

***[Check Culqi documentation for more information](https://docs.culqi.com/#/pagos/inicio)***

## 🔗 Links

* [Culqi](https://culqi.com/)
* [Culqi Docs](https://docs.culqi.com/es/documentacion/)

## 🤝 Contributing

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/lperezp/ngx-culqi/pulls)

I welcome all contributions. Please read our [CONTRIBUTING.md](https://github.com/lperezp/ngx-culqi/blob/master/CONTRIBUTING.md) first. You can submit any ideas as [pull requests](https://github.com/lperezp/ngx-culqi/pulls) or as [GitHub issues](https://github.com/lperezp/ngx-culqi/issues).

## 🎉 Author

- [Luis Eduardo](https://lperezp.dev/?utm_source=ngx-culqi&utm_medium=readme&utm_campaign=ngx-culqi&utm_id=github)

**Love ngx-culqi? Give our repo a star :star: :arrow_up:.**
