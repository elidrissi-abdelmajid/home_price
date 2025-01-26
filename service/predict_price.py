from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import json
import joblib 
with open("../data/columns.json", "r") as f:
    data_columns = json.load(f)["data_columns"]

model = joblib.load("../model/model.pickle")
app = FastAPI()

# Allow CORS for frontend-backend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



class HouseDetails(BaseModel):
    total_sqft: float
    bath: int
    bhk: int
    location: str

# Endpoint for price prediction
@app.post("/predict_price")
def predict_price(data: HouseDetails):
   
    x = np.zeros(len(data_columns))
    x[0] = data.total_sqft
    x[1] = data.bath
    x[2] = data.bhk
    try:
        loc_index = data_columns.index(data.location.lower())
        x[loc_index] = 1
    except ValueError:
        pass  # If location not found, keep as zero

    
    predicted_price = model.predict([x])[0]
    return {"estimated_price": round(predicted_price, 2)}
