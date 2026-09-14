import urllib.request
import urllib.error
import json

url = 'https://dt-backend-1.onrender.com/auth/login'
data = json.dumps({'email': 'test@test.com', 'password': 'password'}).encode('utf-8')
headers = {'Content-Type': 'application/json'}
req = urllib.request.Request(url, data=data, headers=headers, method='POST')

try:
    response = urllib.request.urlopen(req)
    print("Success:", response.read().decode())
except urllib.error.HTTPError as e:
    print(f"HTTP Error {e.code}: {e.read().decode()}")
except Exception as e:
    print(f"Error: {e}")
