from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.recommendation.recommender import get_recommendations

app = FastAPI()

# Allow frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Backend is working 🚀"}

@app.get("/movies")
def get_movies():
    return [
        {"id": 1, "title": "Avengers"},
        {"id": 2, "title": "Interstellar"},
        {"id": 3, "title": "Inception"}
    ]

@app.get("/recommend")
def recommend(movie: str):
    results = get_recommendations(movie)
    return {"recommendations": results}