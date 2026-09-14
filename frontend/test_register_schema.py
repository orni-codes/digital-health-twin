import urllib.request
import urllib.error
import json
import uuid

# 1. Register a test user
email = f"test_{uuid.uuid4().hex[:8]}@example.com"
password = "TestPassword123!"

print(f"Testing with email: {email}")

register_url = 'https://dt-backend-1.onrender.com/auth/register'
# Assuming register takes name, email, password based on typical flows
# Let's check openapi.json for register schema first
def get_schema():
    url = 'https://dt-backend-1.onrender.com/openapi.json'
    data = json.loads(urllib.request.urlopen(url).read())
    schema = data['paths']['/auth/register']['post']['requestBody']['content']['application/json']['schema']
    if '$ref' in schema:
        ref_path = schema['$ref']
        schema_name = ref_path.split('/')[-1]
        return data['components']['schemas'][schema_name]
    return schema

print("Register Schema:", json.dumps(get_schema(), indent=2))
