# Stage 1: Builder
FROM python:3.12-slim AS builder

WORKDIR /build

RUN apt-get update && apt-get install -y gcc

COPY requirements.txt .

RUN pip install --user --no-cache-dir -r requirements.txt


# Stage 2: Runner
FROM python:3.12-slim

WORKDIR /app

RUN apt-get update && apt-get install -y postgresql-client

COPY --from=builder /root/.local /root/.local

ENV PATH=/root/.local/bin:$PATH
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

COPY . .

RUN groupadd app && useradd -m -g app app && chown -R app:app /app
USER app

EXPOSE 8000

HEALTHCHECK CMD python -c "import urllib.request; urllib.request.urlopen('http://localhost:8000/health')" || exit 1

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]