#!/usr/bin/python3
"""
This module creates a Review class
"""
from os import environ
from models.base_model import BaseModel, Base
from uuid import uuid4
from sqlalchemy.orm import relationship
from sqlalchemy import Column, String, ForeignKey, Integer, Float, Table

s = "HBNB_TYPE_STORAGE"

if s in environ.keys() and environ["HBNB_TYPE_STORAGE"] == "db":
    class Review(BaseModel, Base):
        """
        This is the class for Review Attributes:
        user_id: user id
        place_id: place id
        text: review description
        """
        __tablename__ = "reviews"
        text = Column(String(1024), nullable=False)
        place_id = Column(String(60), ForeignKey('places.id'), nullable=False)
        user_id = Column(String(60), ForeignKey('users.id'), nullable=False)

        def __init__(self, **kwargs):
            setattr(self, "id", str(uuid4()))
            for i, j in kwargs.items():
                setattr(self, i, j)
else:
    class Review(BaseModel):
        """
        This is the class for Review Attributes:
            user_id: user id
            place_id: place id
            text: review description
        """
        user_id = ""
        place_id = ""
        text = ""
