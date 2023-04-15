#!/usr/bin/python3
"""
This module creates a User class
"""
from models.base_model import BaseModel,Base
from sqlalchemy.orm import relationship
from sqlalchemy import Column, String, ForeignKey, Integer
from uuid import uuid4
from os import environ

s = "HBNB_TYPE_STORAGE"
if s in environ.keys() and environ["HBNB_TYPE_STORAGE"] == "db":
    class City(BaseModel, Base):
        '''
        Class for managing City Attributes
        '''
        __tablename__ = "cities"
        state_id = Column(String(60), ForeignKey('states.id'), nullable=False)
        name = Column(String(128), nullable=False)
        places = relationship("Place", backref="cities", cascade="all,delete")

        def __init__(self, **kwargs):
            setattr(self, "id", str(uuid4()))
            for i, j in kwargs.items():
                setattr(self, i, j)
else:
    class City(BaseModel):
        """
        Class for managing City Objects
        """
        state_id = ""
        name = ""
