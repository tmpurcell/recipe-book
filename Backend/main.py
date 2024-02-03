from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models.login import Login

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers

)
@app.post("/login/")
async def log_in(login: Login):
    return login