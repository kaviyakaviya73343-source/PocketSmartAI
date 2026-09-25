from google import genai
from google.genai import types

from config import GEMINI_API_KEY


client = genai.Client(
    api_key=GEMINI_API_KEY
)


MODEL_NAME = "gemini-2.5-flash"


def generate_text(prompt):

    try:

        response = client.models.generate_content(

            model=MODEL_NAME,

            contents=prompt
        )

        return response.text


    except Exception as e:

        print(
            "Gemini Text Error:",
            e
        )

        return None


def generate_with_image(
    prompt,
    image_bytes
):

    try:

        image_part = types.Part.from_bytes(
            data=image_bytes,
            mime_type="image/jpeg"
        )


        response = client.models.generate_content(

            model=MODEL_NAME,

            contents=[
                prompt,
                image_part
            ]
        )


        return response.text


    except Exception as e:

        print(
            "Gemini Image Error:",
            e
        )

        return None