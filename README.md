# Skin-cancer-image-classifier


This is a Flask app that uses a pre-trained Keras model to classify skin lesion images into different categories. The app provides a REST API endpoint that accepts an image file and returns a predicted class label.

### Installation

Clone the repository or download the code files to your local machine.
Install the required dependencies in GUI/requirements.txt using pip:

```
Update the model_path variable in app.py with the path to your saved Keras model file.

### Usage

Open a terminal or command prompt and navigate to the directory where app.py is saved.
Run the following command to start the Flask app:
python app.py

or just run the main.py file
```
The app should now be running on your local machine. You can send a POST request to the /predict endpoint to get a prediction for your image. You can use tools like Postman or cURL to send the request.
The app will return a JSON response with the predicted class label.
API Endpoint
The app provides a single API endpoint at /predict. You can send a POST request to this endpoint with an image file in the request body. The app will use the pre-trained Keras model to predict the class label for the image and return a JSON response with the predicted label.

### Request

POST /predict
Content-Type: multipart/form-data
Request Body
The request body should contain a single image file in JPEG or PNG format.

### Response
The app will return a JSON response with a predicted label for the image. The response will have the following format:

Copy
{
    "predicted_label": "<predicted label>"
}

### The predicted label will be one of the following:

0- Actinic keratosis
    
1- Basal cell carcinoma
    
2- Benign keratosis
    
3- Dermatofibroma
    
4- Melanoma
    
5- Nevus
    
6- Squamous cell carcinoma
 
### Dataset
  
The dataset used in this project can be found at the following link: https://drive.google.com/file/d/1PzFAhIJZbW_ApsxYNeCHwY2MY1gBRN44/view?usp=share_link

### Credits

 The pre-trained Keras model used in this app was trained on the ISIC 2018 Skin Lesion Classification dataset. The app was developed by
