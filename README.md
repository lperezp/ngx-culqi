# ng-culqi

[Culqi](https://culqi.com/) payment gateway library made to use with Angular.

### Installation

Adding Scully to your project is as simple as running one command:

```
npm i ng-culqi
```

### Usage

After installation add this code below the ``app-root`` tag in the ``index.html``.

```
  <app-root></app-root>
  <script src="https://checkout.culqi.com/js/v3"></script>
  <script>
    function culqi() {
      console.log("iniio");
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

Inside the component, modify the constructor and add the following code:

```
  constructor(private ngCulqiService: NgCulqiService) {
    document.addEventListener('payment_event', (token: any) => {
      this.TOKEN_CULQI = token.detail;
    });
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

### Demo

[Ver Demo](https://github.com/lperezp/culqi-angular)

### Author

[lperezp](https://twitter.com/lperezp_pe)

### Licence

Licence MIT

### Contributing

We welcome all contributions. You can submit any ideas as pull requests or as GitHub issues.

***Love ng-culqi? Give our repo a star.***
