import urllib.request
import json

url = 'https://dt-backend-1.onrender.com/openapi.json'
data = json.loads(urllib.request.urlopen(url).read())

# Navigate to the login endpoint schema
try:
    schema = data['paths']['/auth/login']['post']['requestBody']['content']['application/json']['schema']
    if '$ref' in schema:
        ref_path = schema['$ref']
        schema_name = ref_path.split('/')[-1]
        actual_schema = data['components']['schemas'][schema_name]
        print(json.dumps(actual_schema, indent=2))
    else:
        print(json.dumps(schema, indent=2))
except Exception as e:
    # FastAPI OAuth2PasswordRequestForm usually uses application/x-www-form-urlencoded
    # Let's check entire request body
    print(json.dumps(data['paths']['/auth/login']['post']['requestBody'], indent=2))
