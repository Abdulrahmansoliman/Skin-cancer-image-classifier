import os
from flask import Flask, request, jsonify
from tensorflow import keras
from keras.models import Sequential, load_model
import cv2
import numpy as np
import io
import os
from google.oauth2 import service_account
import pandas as pd
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
import base64
from PIL import Image
from io import BytesIO


# Load the saved model
model_path = r'E:\College\Junior\Spring\AI\Projec\models\model.h5'
model = load_model(model_path)

# Compute the mean and standard deviation of the training data
X_mean = 159.8194591494919
X_std = 46.388207881604245


# Create a new Flask app instance
app = Flask(__name__)

# Define the API endpoint


@app.route('/predict', methods=['POST'])
def predict():
    # Get the image data from the request payload
    image_data = request.json['image']

    # Decode the base64 image
    image_data = image_data.split(',')[1]
    image_bytes = base64.b64decode(image_data)

    # Load the image using Pillow
    image_cv = Image.open(BytesIO(image_bytes))

    # Convert the image to OpenCV format
    image = cv2.cvtColor(np.array(image_cv), cv2.COLOR_RGB2BGR)

    # Preprocess the image data
    image = cv2.resize(image, (64, 64))
    image = np.array(image)
    image = (image - X_mean) / X_std
    image = image.reshape(1, 64, 64, 3)

    # Use the model to make predictions on the image data
    prediction = model.predict(image)
    predicted_class = np.argmax(prediction)

    # Return the predicted class label as JSON
    if predicted_class == 0:
        predicted_label = "Actinic keratosis"
    elif predicted_class == 1:
        predicted_label = "Basal cell carcinoma"
    elif predicted_class == 2:
        predicted_label = "Benign keratosis"
    elif predicted_class == 3:
        predicted_label = "Dermatofibroma"
    elif predicted_class == 4:
        predicted_label = "Melanoma"
    elif predicted_class == 5:
        predicted_label = "Nevus"
    else:
        predicted_label = "Squamous cell carcinoma"

    response = {
        'predicted_label': predicted_label
    }
    print(response)

    return jsonify(response)


# Define the main function to start the app
if __name__ == '__main__':
    app.run(debug=True)
    print('app ran')
