<p align="center">
    <img width="230" src="https://i.ibb.co/3B95v9S/icon-ngx-culqi.png">
</p>

<h1 align="center">
ngx-culqi
</h1>

<div align="center">

[Culqi](https://culqi.com/) payment gateway library made to use with Angular.

[![Github branch](https://github.com/lperezp/ngx-culqi/actions/workflows/build.yml/badge.svg)](https://github.com/lperezp/ngx-culqi/actions/workflows/build.yml)
[![CodeFactor](https://www.codefactor.io/repository/github/lperezp/ngx-culqi/badge?style=flat-square)](https://www.codefactor.io/repository/github/ng-zorro/ng-zorro-antd)
[![Codecov](https://img.shields.io/codecov/c/github/lperezp/ngx-culqi.svg?style=flat-square)](https://codecov.io/gh/lperezp/ngx-culqi)
[![GitHub Release Date](https://img.shields.io/github/release-date/lperezp/ngx-culqi.svg?style=flat-square)](https://github.com/lperezp/ngx-culqi/releases)
[![npm package](https://img.shields.io/npm/v/ngx-culqi.svg?style=flat-square)](https://www.npmjs.org/package/ngx-culqi)
[![NPM downloads](http://img.shields.io/npm/dm/ngx-culqi.svg?style=flat-square)](https://npmjs.org/package/ngx-culqi)
[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Twitter](https://img.shields.io/badge/Twitter-lperezp_pe-blue.svg?style=flat-square&logo=twitter)](https://twitter.com/lperezp_pe)

</div>


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

After installation add this code below the ``app-root`` tag in the ``index.html``.

```
  <app-root></app-root>
  <script src="https://checkout.culqi.com/js/v3"></script>
  <script>
    function culqi() {
      if (Culqi.token) {
        var token = Culqi.token.id;
        var payment_event = new CustomEvent("payment_event", {
          detail: token,
        });
        document.dispatchEvent(payment_event);
      }
    }
  </script>
```

Inside the class, add the __@HostListener__ decorator to catch the event from the _culqi.js_:

```
 @HostListener('document:payment_event', ['$event'])
  onPaymentEventCustom($event: CustomEvent) {
    this.TOKEN_CULQI = $event.detail;
  }

```

Inside ``ngOnInit`` add the following script:

```
  ngOnInit() {
    this.ngCulqiService.initCulqi('ENTER_PUBLIC_KEY');
  }
```

***Replace with the PUBLIC KEY granted by Culqi.***

Create the function to run the gateway. Within the function you have to configure your payment gateway with the data of the online store.
You can also configure the button within the Culqi modal.

***[Check Culqi documentation for more information](https://docs.culqi.com/#/pagos/inicio)***

```
  handleButtonPayment() {
    const culqiSettings = {
      title: 'My Angular Store',
      currency: '',
      description: 'item #01',
      amount: 100.00,
    };
    const culqiOptions = {
      lang: 'auto',
      modal: true,
      installments: false,
      customButton: '',
      style: {
        logo: '',
        maincolor: '',
        buttontext: '',
        maintext: '',
        desctext: '',
      },
    };
    this.ngCulqiService.generateToken(culqiSettings, culqiOptions);
  }
```

## Demo

 [Ver Demo](https://github.com/lperezp/culqi-angular)

## 🔗 Links

* [Culqi](https://culqi.com/)
* [Culqi Docs](https://docs.culqi.com/es/documentacion/)

## 🤝 Contributing

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/lperezp/ngx-culqi/pulls)

I welcome all contributions. Please read our [CONTRIBUTING.md](https://github.com/lperezp/ngx-culqi/blob/master/CONTRIBUTING.md) first. You can submit any ideas as [pull requests](https://github.com/lperezp/ngx-culqi/pulls) or as [GitHub issues](https://github.com/lperezp/ngx-culqi/issues).

## 🎉 Author

- [lperezp]( https://lperezp.dev/?utm_source=ngx-culqi&utm_medium=github-ngx-culqi&utm_campaign=ngx-culqi&utm_id=github)

**Love ngx-culqi? Give our repo a star :star: :arrow_up:.**
