from django.test import TestCase
from colors.utils import generate_random_color, COLOR_GENERATORS

class UtilsTestCase(TestCase):
    def test_color_generators_registered(self):
        self.assertIn('rgb', COLOR_GENERATORS)
        self.assertIn('hsl', COLOR_GENERATORS)

    def test_generate_rgb_color(self):
        rgb_color = COLOR_GENERATORS['rgb']()
        self.assertEqual(rgb_color['type'], 'rgb')
        self.assertIn('red', rgb_color)
        self.assertIn('green', rgb_color)
        self.assertIn('blue', rgb_color)
        self.assertGreaterEqual(rgb_color['red'], 0)
        self.assertLessEqual(rgb_color['red'], 255)

    def test_generate_hsl_color(self):
        hsl_color = COLOR_GENERATORS['hsl']()
        self.assertEqual(hsl_color['type'], 'hsl')
        self.assertIn('hue', hsl_color)
        self.assertIn('saturation', hsl_color)
        self.assertIn('lightness', hsl_color)
        self.assertGreaterEqual(hsl_color['hue'], 0)
        self.assertLessEqual(hsl_color['hue'], 360)

    def test_generate_random_color(self):
        colors = generate_random_color(num_colors=3)
        self.assertEqual(len(colors), 3)
        for color in colors:
            self.assertIn(color['type'], COLOR_GENERATORS)
