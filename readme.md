## Blog Priscilla

### install

```bash
php artisan vendor:publish --provider="Backpack\Base\BaseServiceProvider" #publishes configs, langs, views and AdminLTE files
```

```bash
php artisan vendor:publish --provider="Prologue\Alerts\AlertsServiceProvider" # publish config for notifications - prologue/alerts
```

```bash
php artisan elfinder:publish #published elfinder assets
```

```bash
php artisan vendor:publish --provider="Backpack\CRUD\CrudServiceProvider" --tag="public" #publish CRUD assets
```

```bash
php artisan vendor:publish --provider="Backpack\CRUD\CrudServiceProvider" --tag="lang" #publish CRUD lang files
```

```bash
php artisan vendor:publish --provider="Backpack\CRUD\CrudServiceProvider" --tag="config" #publish CRUD and custom elfinder config files
```

```bash
php artisan vendor:publish --provider="Backpack\CRUD\CrudServiceProvider" --tag="elfinder" #publish custom elFinder views
```

```bash
php artisan migrate:refresh --seed
```

```bash
npm install
```

```bash
npm build
```
