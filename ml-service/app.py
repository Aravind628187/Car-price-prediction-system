from flask import Flask, request, jsonify
from price_engine import predict_price

app = Flask(__name__)

@app.route("/predict", methods=["POST"])
def predict():

    data = request.json

    price = predict_price(
        data["brand"],
        data["model"],
        int(data["year"]),
        int(data["km_driven"]),
        data["fuel"]
    )

    return jsonify({
        "predicted_price": price,
        "currency": "INR"
    })

@app.route("/")
def home():
    return "Car Price Prediction Service Running 🚗"

if __name__ == "__main__":
    app.run(port=8000, debug=True)