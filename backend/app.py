import logging
from flask import Flask, request, jsonify
from flask_cors import CORS
from ai.smart_contract_debugger import analyze_contract

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/analyze', methods=['POST'])
def analyze():
    contract_code = request.json.get('contract_code', '')
    logging.info(f'Received contract code: {contract_code}')
    result = analyze_contract(contract_code)
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
