import urllib.request
import json

url = 'https://dt-backend-1.onrender.com/openapi.json'
data = json.loads(urllib.request.urlopen(url).read())
try:
    schema = data['paths']['/auth/register']['post']['requestBody']['content']['application/json']['schema']
    if '$ref' in schema:
        ref_path = schema['$ref']
        schema_name = ref_path.split('/')[-1]
        schema = data['components']['schemas'][schema_name]
    with open('register_schema.json', 'w') as f:
        json.dump(schema, f, indent=2)
except Exception as e:
    print(f"Error checking register schema: {e}")
