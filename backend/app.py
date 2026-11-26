
from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route("/api/start", methods=["POST"])
def start_game():

    return jsonify({
        "status": "success",
        "message": "Game started!",
        "days": 30,
        "score": 0
    })


if __name__ == "__main__":
    app.run(debug=True)
