from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .utils import generate_random_color

class ColorSwatchView(APIView):
    def get(self, request):
        # Generate random color swatches
        colors = generate_random_color()
        return Response(colors, status=status.HTTP_200_OK)
    
    from django.http import HttpResponse

