FROM python:3

ENV PYTHONUNBUFFERED=1

RUN mkdir /code

WORKDIR /code

COPY requirements.txt /code/

RUN pip install --upgrade pip gunicorn

RUN pip install -r requirements.txt

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--log-level", "warning", "--reload", "pyproject.wsgi:application"]

COPY . /code/
