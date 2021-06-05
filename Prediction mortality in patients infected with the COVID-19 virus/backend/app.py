import time
from flask import Flask, request

app = Flask(__name__)


@app.route('/time',  methods=['GET'])
def get_current_time():
    return {'time': time.time()}


@app.route('/Covid-19', methods=['POST'])
def predict():
    data = request.get_json()
    return (data)
