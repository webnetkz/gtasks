from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def index():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def items(item_id: int, element: Union[str, None] = None):
    return {"item_id": item_id, "element": element}