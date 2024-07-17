# test_server.py

import requests
import json

url = 'http://localhost:5000/analyze'

# Example contract code to analyze
contract_code = """
contract MyContract {
    function myFunction() {
        transfer(msg.sender, 100);
    }
}
"""

payload = {
    'contract_code': contract_code
}

response = requests.post(url, json=payload)
result = response.json()

print("Analysis Result:")
print(result)
