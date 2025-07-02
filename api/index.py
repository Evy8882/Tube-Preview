from flask import Flask, request
from flask_cors import CORS
from pytubefix import YouTube
import whisper
from openai import OpenAI
import os
from pathlib import Path
import uuid

apifile = open("apikey.txt", "r")
APIKEY = apifile.read()
apifile.close()

client = OpenAI(
  base_url="https://openrouter.ai/api/v1",
  api_key=APIKEY,
)



app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def index():
    video = request.args.get('video', type=str)
    
    yt = YouTube(video)
    
    audio_stream = yt.streams.filter(only_audio=True).first()
    filename = f"audio_{uuid.uuid4().hex}.mp4"
    output_path = Path(__file__).parent.resolve()
    audio_path = audio_stream.download(output_path=str(output_path), filename=filename)
    
    
    model = whisper.load_model("base")
    video_content = model.transcribe(audio_path)
    os.remove(audio_path)
    
    
    input = f"resuma esse vídeo com base no conteúdo transcrito (apenas um texto corrido sem formatação): {video_content}"
    completion = client.chat.completions.create(
    #   extra_headers={
    #     "HTTP-Referer": "<YOUR_SITE_URL>", # Optional. Site URL for rankings on openrouter.ai.
    #     "X-Title": "<YOUR_SITE_NAME>", # Optional. Site title for rankings on openrouter.ai.
    #   },
    # extra_body={},
    model="deepseek/deepseek-r1:free",
    messages=[
        {
        "role": "user",
        "content": input
        }
    ]
    )
    
    return completion.choices[0].message.content

if __name__ == "__main__":
    app.run()