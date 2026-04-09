from fastapi import FastAPI
from pydantic import BaseModel
from datetime import datetime

app = FastAPI()


class EchoRequest(BaseModel):
    message: str


@app.get("/api/v1/health")
async def health_check():
    """Return health status of the service."""
    return {
        "status": "ok",
        "service": "psltp-customer"
    }


@app.post("/api/v1/echo")
async def echo(request: EchoRequest):
    """Echo back the JSON request body."""
    return {
        "echo": request.message,
        "timestamp": datetime.now().isoformat()
    }