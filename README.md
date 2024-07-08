# Skin Cancer Image Classifier

This is a web application built with Python Flask as the backend and Next.js as the frontend.

## Backend Description
The backend of this application is built with Flask, a Python web framework. It utilizes a pre-trained Keras model to classify skin lesion images into different categories. The backend provides a REST API endpoint that accepts an image file and returns a predicted class label.


## Frontend Description
The frontend of this application is built using Next.js, a React framework for server-side rendering. It provides users with an intuitive interface where they can select the model they want to use and upload an image. Once the image is uploaded, the frontend sends a request to the backend API and displays the predicted class label to the user.

## Backend Setup

1. Install Python: Download and install Python from the [official Python website](https://www.python.org).
2. Navigate to the `GUI` folder using the terminal:
``` 
cd GUI
```
3. Install Dependencies: Install the required packages listed in `requirements.txt`:
```
pip install -r requirements.txt
```
4. Run the Backend: Start the Flask backend:
```
python main.py
```

The backend should now be running on the specified host and port.

## Frontend Setup

1. Install Node.js: Download and install Node.js from the [official Node.js website](https://nodejs.org). We recommend using Node.js version >= 18.12.
2. Navigate to the `frontend` folder using the terminal:
``` 
cd ../frontend
```
3. Install Dependencies: Install the required packages:
```
npm install
```
4. Run the Frontend: Start the Next.js development server:
```
npm run dev
```

The website should now be accessible at `localhost:3000`.

You can also use the backend only by sending a request to `http://127.0.0.1:5000`.


### Predicted Labels

The predicted label will be one of the following:

0. Actinic Keratosis
1. Basal Cell Carcinoma
2. Benign Keratosis
3. Dermatofibroma
4. Melanocytic Nevi
5. Vascular Lesions
6. Melanoma
7. Nevus
8. Squamous Cell Carcinoma


### Dataset

The dataset used in this project can be found at the following link: [Dataset Link](https://drive.google.com/file/d/1PzFAhIJZbW_ApsxYNeCHwY2MY1gBRN44/view?usp=share_link)

### Credits

The pre-trained Keras model used in this app was trained on the ISIC 2018 Skin Lesion Classification dataset. 

The app was developed by:
1. [Mostafa Khalil](https://github.com/MostafaWahiep)
2. [Mohamed Abdelmaksoud](https://github.com/helmy162)
3. [Nour Hammad](https://github.com/nourhammmad)
4. [Abdelrahman Mohamed](https://github.com/Abdulrahmansoliman)
5. [Abdulrahman Hassan](https://github.com/AbdulrahmanHassan01)
