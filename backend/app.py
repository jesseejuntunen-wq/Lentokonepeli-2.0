
from flask import Flask, jsonify

app = Flask(__name__)


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
