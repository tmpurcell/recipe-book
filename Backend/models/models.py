from pydantic import BaseModel
from typing import Union

class User(BaseModel):
    email: Union[str, None] = None
    username: Union[str, None] = None
    password: str

class Image(BaseModel):
    filename: str

class AIPrompt(BaseModel):
    prompt: str

class MealPrep(BaseModel):
    foodType: str
    duration: str