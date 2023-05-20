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
    method = request.json['method']

    # Load the saved model
    if(method == 'dense'):
        model_path = r'.\models\DenseNetFT.h5'
    elif(method == 'vgg'):
        model_path = r'.\models\VGG16FT.h5'
    else:
        model_path = r'.\models\model.h5'
        
    model = load_model(model_path)

    # Decode the base64 image
    image_data = image_data.split(',')[1]
    image_bytes = base64.b64decode(image_data)

    # Load the image using Pillow
    image_cv = Image.open(BytesIO(image_bytes))

    # Convert the image to OpenCV format
    image = cv2.cvtColor(np.array(image_cv), cv2.COLOR_RGB2BGR)

    # Preprocess the image data
    if(method == 'dense' or method == 'vgg'):
        image = cv2.resize(image, (192, 256))
    else:
        image = cv2.resize(image, (64, 64))
    image = np.array(image)
    image = (image - X_mean) / X_std
    if(method == 'dense' or method == 'vgg'):
        image = image.reshape(1, 192, 256, 3)
    else:
        image = image.reshape(1, 64, 64, 3)

    # Use the model to make predictions on the image data
    prediction = model.predict(image)
    predicted_class = np.argmax(prediction)
    
    classes = ['Actinic Keratoses','Basal Cell Carcinoma',
               'Benign Keratosis','Dermatofibroma',
               'Melanocytic nevi','Vascular Lesions','Melanoma']
               
    predicted_label = classes[predicted_class]

    response = {
        'predicted_label': predicted_label
    }

    return jsonify(response)


# Define the main function to start the app
if __name__ == '__main__':
    app.run(debug=True)
    print('app ran')
