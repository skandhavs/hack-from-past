from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import os
from twilio.rest import Client

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    '*'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

account_sid = 'AC31c8a75a48f6b409b9920b7d8ab8bcd9'
auth_token = "d08f9db8853bc49eaa203bd9378798a3"


@app.get("/")
async def root():
    return {"message": "Fast api get"}


@app.post("/twilio")
async def twilio(url: str, mobile: str):
    print(url)
    print(mobile)
    client = Client(account_sid, auth_token)
    message = client.messages.create(
        body='Hi there',
        from_='+13023053248',
        to='+91'+mobile
    )

    print(message.sid)
    return {"message": "SMS sent"}

if __name__ == "__main__":
    uvicorn.run(app, host='0.0.0.0', port=8000)
