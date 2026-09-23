#!/bin/sh
export DB_CONNECTION=sqlite
export DB_DATABASE=:memory:
export APP_ENV=testing

php artisan config:clear
php artisan test "$@"
