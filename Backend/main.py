from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models.models import User, Image, AIPrompt
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()
app = FastAPI()
client = OpenAI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers

)

@app.post("/login")
async def log_in(user: User):
    return True

@app.post("/signup")
async def sign_up(user: User):
    return True

@app.post("/image_upload")
async def image_upload(image: Image):
    if image.filename == 'blueberry.jpeg':
        recipe = {
                    'title': 'Blueberry Muffins',
                    'ingredients': ['2 cups all-purpose flour', '1 cup granulated sugar', '2 teaspoons baking powder', '1/2 teaspoon salt', '1/2 cup melted butter', '1/2 cup milk', '1 teaspoon vanilla extract', '2 cups blueberries'],
                    'steps': ['Prehead over to 400 degrees. Prepare a muffin pan. In a large bowl, sift together flour, sugar, baking powder, and salt.', 'In a medium bowl, whisk in eggs. Add butter, milk and vanilla. Add to flour mixture and stir until combined. Fold in blueberries.', 'Add mix to muffin pan. Bake about 18-20 minutes. Let muffins cool before removing from pan.']
                }
        return recipe
    elif image.filename == 'filler':
        return True
    return False

@app.post('/generate_recipe')
async def generate_recipe(prompt: AIPrompt):
    completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        #{"role": "system", "content": "You are a helpful chef, skilled in cooking complex meals and explaining how to make them with creative flair."},
        {"role": "user", "content": prompt.prompt}
    ]
    )
    return completion.choices[0].message