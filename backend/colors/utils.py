import random

COLOR_GENERATORS = {}

def register_color_generator(color_type):
    """
    Decorator to register a color generator function.
    """
    def wrapper(func):
        COLOR_GENERATORS[color_type] = func
        return func
    return wrapper

# Color generation functions
@register_color_generator('rgb')
def generate_rgb_color():
    return {
        'type': 'rgb',
        'red': random.randint(0, 255),
        'green': random.randint(0, 255),
        'blue': random.randint(0, 255)
    }

@register_color_generator('hsl')
def generate_hsl_color():
    return {
        'type': 'hsl',
        'hue': random.randint(0, 360),
        'saturation': random.randint(0, 100),
        'lightness': random.randint(0, 100)
    }

# @register_color_generator('brgb')
# def generate_brgb_color():
#     return {
#         'type': 'brgb',
#         'red': random.randint(0, 10000),
#         'green': random.randint(0, 10000),
#         'blue': random.randint(0, 10000)  
#     }
    
def generate_random_color(num_colors=5):
    """
    Generate random color swatches using registered color generators.

    Args:
        num_colors (int): Number of random colors to generate.

    Returns:
        List[dict]: List of randomly generated colors.
    """
    colors = []
    generator_names = list(COLOR_GENERATORS.keys())
    
    for _ in range(num_colors):
        color_type = random.choice(generator_names)
        colors.append(COLOR_GENERATORS[color_type]())
    
    return colors