import json

# Load the JSON data from a file
with open('sshelp.json', 'r') as f:
    data = json.load(f)

# Iterate over all items in the JSON array
for i, item in enumerate(data):
    # Extract the necessary fields
    title = item['metadata']['title']
    description = item['metadata']['description']
    text = item['text']

    # Open a new Markdown file for each item
    with open(f'docs/output_{i}.md', 'w') as f:
        # Write to the Markdown file
        f.write(f'# {title}\n')
        f.write(f'## {description}\n')
        f.write(f'{text}\n\n')