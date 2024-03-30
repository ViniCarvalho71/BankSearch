from django.urls import path
from banksearch.views import index, service, search

urlpatterns = [
    path('', index, name = 'home'),
    path('service', service, name = 'service'),
    path('search', search, name = 'search'),
]