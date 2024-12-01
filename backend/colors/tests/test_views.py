from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse
from colors.utils import COLOR_GENERATORS

class ColorSwatchViewTestCase(APITestCase):
    def test_get_colors(self):
        url = reverse('color-swatch')
        response = self.client.get(url)
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        self.assertIsInstance(response.data, list)
        self.assertGreater(len(response.data), 0)

        for color in response.data:
            self.assertIn('type', color)
            self.assertIn(color['type'], COLOR_GENERATORS)
