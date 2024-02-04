from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models.models import User, Image, AIPrompt, MealPrep
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
                    'steps': 'Preheat oven to 400 degrees. Prepare a muffin pan. In a large bowl, sift together flour, sugar, baking powder, and salt. In a medium bowl, whisk in eggs. Add butter, milk and vanilla. Add to flour mixture and stir until combined. Fold in blueberries. Add mix to muffin pan. Bake about 18-20 minutes. Let muffins cool before removing from pan.'
                }
        return recipe
    elif image.filename == 'poppyseed.jpeg':
        recipe = {
                    'title': 'Poppy Seed Chicken Casserole',
                    'ingredients': ['4 boneless, skinless chicken breasts, boiled and shredded in large pieces', '1/2 medium yellow onion, diced', '1 (10.75oz) can cream of chicken', '16oz sour cream', '8oz cream cheese, softened', '1 tablespoon poppy seeds', '1/2 teaspoon salt', '1/4 teaspoon black pepper', '1/2 cup melted butter', '1.5 sleeves Ritz crackers, crushed'],
                    'steps': 'Preheat over to 350 degrees. In a large bowl, mix together cream of chicken, sour cream, cream cheese, poppy seeds, salt and pepper. Add onion and chicken. Transfer mixture to a casserole dish. Top evenly with crushed crackers and drizzle melted butter on top. Bake for 25 minutes.'
                 }
        return recipe


@app.post('/meal_suggestions')
async def generate_recipe(prompt: AIPrompt):
    completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        #{"role": "system", "content": "You are a helpful chef, skilled in cooking complex meals and explaining how to make them with creative flair."},
        {"role": "user", "content": "I'm in the mood for " + prompt.prompt + " can you suggest a recipe that I should try?"}
    ]
    )
    return completion.choices[0].message

@app.post('/budget_plan')
async def generate_recipe_within_budget(prompt: AIPrompt):
    completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        #{"role": "system", "content": "You are a helpful chef, skilled in cooking complex meals and explaining how to make them with creative flair."},
        {"role": "user", "content": "My budget for groceries is " + prompt.prompt + " can you suggest some recipes that I should try? And can you include average prices for the ingredients?"}
    ]
    )
    return completion.choices[0].message

@app.post('/meal_prep')
async def generate_meal_prep(mealPrep: MealPrep):
    completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        #{"role": "system", "content": "You are a helpful chef, skilled in cooking complex meals and explaining how to make them with creative flair."},
        {"role": "user", "content": "I am preparing to meal prep " + mealPrep.foodType + " for " + mealPrep.duration + " days. Can you suggest some recipes that I should try?"}
    ]
    )
    return completion.choices[0].message

@app.post('/available_items')
async def generate_meal_prep(prompt: AIPrompt):
    completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        #{"role": "system", "content": "You are a helpful chef, skilled in cooking complex meals and explaining how to make them with creative flair."},
        {"role": "user", "content": "I have limited ingredients and need suggestions for what I can make with them. I have " + prompt.prompt + " available. Can you suggest some recipes that I could try?"}
    ]
    )
    return completion.choices[0].message