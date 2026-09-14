import urllib.request
import json

url = 'https://dt-backend-1.onrender.com/openapi.json'
data = json.loads(urllib.request.urlopen(url).read())

# Check success response schema
try:
    schema = data['paths']['/auth/login']['post']['responses']['200']['content']['application/json']['schema']
    if '$ref' in schema:
        ref_path = schema['$ref']
        schema_name = ref_path.split('/')[-1]
        actual_schema = data['components']['schemas'][schema_name]
        print("Schema:", json.dumps(actual_schema, indent=2))
    else:
        print("Schema:", json.dumps(schema, indent=2))
except Exception as e:
    print(f"Error checking response schema: {e}")
