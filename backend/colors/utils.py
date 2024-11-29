import random

def generate_rgb_color():
    return {
        'type': 'rgb',
        'red': random.randint(0, 255),
        'green': random.randint(0, 255),
        'blue': random.randint(0, 255)
    }

def generate_hsl_color():
    return {
        'type': 'hsl',
        'hue': random.randint(0, 360),
        'saturation': random.randint(0, 100),
        'lightness': random.randint(0, 100)
    }

def generate_random_color():
    # Generate 5 random color swatches in RGB and HSL color spaces
    colors = []
    for _ in range(5):
        if random.choice([True, False]):
            colors.append(generate_rgb_color())
        else:
            colors.append(generate_hsl_color())
    return colors
