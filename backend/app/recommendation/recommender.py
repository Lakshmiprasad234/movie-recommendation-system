import pandas as pd

movies = pd.read_csv("dataset/movies.csv")

def get_recommendations(movie_name):
    recommendations = movies[movies["title"] != movie_name]
    return recommendations["title"].head(5).tolist()