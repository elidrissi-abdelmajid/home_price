# SmartHome Price Predictor

# demo 

2025-01-26 19-13-32.mp4" 


The SmartHome Price Predictor is a complete end-to-end project that predicts house prices based on user-provided details such as area, BHK, number of bedrooms, and location. This project demonstrates the use of machine learning, backend and frontend development, and modern CI/CD practices to create a scalable and user-friendly web application.

**Features**

 -> **Machine Learning Model:** A linear regression model trained on key house features to predict prices.
 
->  **Backend:** Built with FastAPI for efficient and scalable API services.

-> **Frontend:**  A simple and intuitive web interface using HTML, CSS, and JavaScript.

-> **CI/CD Pipeline:** Automated pipeline using Docker, Jenkins, and Kubernetes for deployment.

# Project Architecture

**Model Training:**

  Features used:
  
    Area
      
    BHK
      
    Number of bedrooms
      
    Location
      
  Model: Linear Regression
  
  Output: Trained model file saved for deployment.
  
**Framework:** FastAPI

**Role:** Serve the machine learning model for prediction.

**Frontend:**

    **Technologies:** HTML, CSS, JavaScript
    
    **Role:** User interface to input house features and display predicted prices.
    

# Deployment:

**Tools:** Docker, Jenkins, Kubernetes

**CI/CD Pipeline:**

    Dockerize the application (backend and frontend).
    
    Push Docker images to DockerHub.
    
    Deploy the application on a Kubernetes cluster.

**Setup and Installation**

Python (3.x)

Docker

Kubernetes

Jenkins


# Steps

**Clone the repository:**

     git clone https://github.com/elidrissi-abdelmajid/home_price  
     
     cd home_price  
    
     uvicorn home_price:app --reload

# Technologies Used

**Programming Languages:** Python, HTML, CSS, JavaScript

**Frameworks:** FastAPI

**Machine Learning:** Linear Regression

**DevOps:** Docker, Jenkins, Kubernetes


LinkedIn: https://www.linkedin.com/in/abdelamjid-elidrissi-45bb38231


GitHub: elidrissi-abdelmajid
