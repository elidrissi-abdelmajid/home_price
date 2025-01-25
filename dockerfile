FROM python:3.10-slim
WORKDIR /App
COPY . /App
RUN pip install --no-cach-dir -r requirements.txt
EXPOSE 9090
CMD ["uvicorn","predict_price:app","--reload","--host","0.0.0.0","--port","9090"]