**# Colors Challenge (fullstack)**

**Steps to run code:**

    git clone https://github.com/Ajinkya710/colorSwatch.git

    cd colorSwatch


**Install dependencies:**

**Frontend** :    This will start the frontend on http://localhost:3000.

    cd frontend

    npm install

    npm start


**Backend** :     This will start the Django server on http://localhost:8000.
    
**API** - http://localhost:8000/api/colors
    
    cd backend
    
    pip install -r requirements.txt

    python manage.py test
    
    python manage.py runserver

**To extend support for new color schemes:**

    Ensure the new color response follows the specified structure.
    
    **Backend:**
      
      Register a brgb color generator using the decorator pattern in colors/utils.py.
    
    **Frontend:**
      
      Implement a color formatter for brgb in src/Pages/ColorSwatch/store/types.ts and add to COLOR_TYPES.
