#!/bin/sh

python manage.py migrate --no-input
python manage.py collectstatic --no-input

gunicorn intranet_django.wsgi.application --bind api:8000

