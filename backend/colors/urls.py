from django.urls import path
from .views import ColorSwatchView

urlpatterns = [
    path('', ColorSwatchView.as_view(), name='color-swatch'),
]

