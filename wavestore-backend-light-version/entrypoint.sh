#!/bin/sh

echo "Esperando a que MySQL esté listo..."
while ! nc -z mysql 3306; do
  sleep 1
done

echo "MySQL está listo. Continuando..."

php artisan migrate --force

PRODUCT_COUNT=$(php artisan tinker --execute="echo \App\Models\product\WavestoreProduct::count();" 2>/dev/null | tail -1)

if [ "$PRODUCT_COUNT" = "0" ] || [ -z "$PRODUCT_COUNT" ]; then
    echo "Corriendo seeders..."
    php artisan db:seed --force
else
    echo "La BD ya tiene datos, saltando seeders..."
fi

php artisan config:cache
php artisan route:cache

exec php-fpm
