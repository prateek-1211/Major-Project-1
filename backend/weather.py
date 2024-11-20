import requests
from flask import Flask, request, jsonify

app = Flask(__name__)

API_KEY = '77ef0b045e7d4b5e5c45ae6fec7136a0'

@app.route('/weather', methods=['GET'])
def get_weather():
    city = request.args.get('city')
    if not city:
        return jsonify({"error": "City not provided"}), 400

    # OpenWeatherMap API call
    base_url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"
    response = requests.get(base_url)
    data = response.json()

    if response.status_code != 200:
        return jsonify({"error": "Failed to fetch weather data"}), response.status_code

    weather = {
        "city": data.get("name"),
        "temperature": data["main"]["temp"],
        "humidity": data["main"]["humidity"],
        "description": data["weather"][0]["description"] if data["weather"] else "No description available"
    }

    return jsonify(weather), 200

if __name__ == '__main__':
    app.run(debug=True)