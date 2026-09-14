import urllib.request
import urllib.error
import json
import uuid

email = f"test_{uuid.uuid4().hex[:8]}@example.com"
password = "TestPassword123!"

print(f"Testing with email: {email}")

req_data = {
    "name": "Test",
    "surname": "User",
    "email": email,
    "password": password
}

register_url = 'https://dt-backend-1.onrender.com/auth/register'
req = urllib.request.Request(register_url, data=json.dumps(req_data).encode('utf-8'), headers={'Content-Type': 'application/json'}, method='POST')

try:
    response = urllib.request.urlopen(req)
    print("Register Success!")
except urllib.error.HTTPError as e:
    print(f"Register Error HTTP {e.code}: {e.read().decode()}")

# Now login
login_data = {
    "email": email,
    "password": password
}
login_url = 'https://dt-backend-1.onrender.com/auth/login'
req_login = urllib.request.Request(login_url, data=json.dumps(login_data).encode('utf-8'), headers={'Content-Type': 'application/json'}, method='POST')

try:
    response = urllib.request.urlopen(req_login)
    print("Login Success:", response.read().decode())
except urllib.error.HTTPError as e:
    print(f"Login Error HTTP {e.code}: {e.read().decode()}")
except Exception as e:
    print(f"Login Error: {e}")
