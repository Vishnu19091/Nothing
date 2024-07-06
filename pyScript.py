import google.generativeai as genai
#from IPython.display import Markdown

gemini_key = ""

genai.configure(api_key = gemini_key)


model = genai.GenerativeModel('gemini-1.0-pro')

response = model.generate_content("")

print(response.text)