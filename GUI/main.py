import os
from flask import Flask, request, jsonify
from tensorflow import keras
from keras.models import Sequential, load_model
import cv2
import numpy as np


# Load the saved model
model_path = r'E:\College\Junior\Spring\AI\Projec\models\model.h5'
model = load_model(model_path)

# Compute the mean and standard deviation of the training data
X_mean = np.mean(X_train_orig)
X_std = np.std(X_train_orig)

# Create a new Flask app instance
app = Flask(__name__)

# Define the API endpoint


@app.route('/predict', methods=['POST'])
def predict():
    # Get the uploaded image file
    file = request.files['image']

    # Read the image file into a NumPy array
    image = cv2.imdecode(np.fromstring(
        file.read(), np.uint8), cv2.IMREAD_COLOR)

    # Convert the image from BGR to RGB format
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

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

    return jsonify(response)


# Define the main function to start the app
if __name__ == '__main__':
    app.run(debug=True)
    print('app ran')
