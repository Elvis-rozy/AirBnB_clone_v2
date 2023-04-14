#!/usr/bin/python3
"""
This module creates a User class
"""
from sqlalchemy.orm import relationship
from models.base_model import BaseModel, Base
from sqlalchemy import Column, String

s = "HBNB_TYPE_STORAGE"

if cs in environ.keys() and environ["HBNB_TYPE_STORAGE"] == "db":
    class User(BaseModel, Base):
        """
        This is the class for managing user Attributes:
        first_name: first name
        last_name: last name
        email: email address
        password: password for your login
        """
        __tablename__ = "users"
        first_name = Column(String(128), nullable=True)
        last_name = Column(String(128), nullable=True)
        email = Column(String(128), nullable=False)
        password = Column(String(128), nullable=False)
        places = relationship("Place", backref="user")
        reviews = relationship("Review", backref="user")

        def __init__(self, **kwargs):
            setattr(self, "id", str(uuid4()))
            for i, j in kwargs.items():
                setattr(self, i, j)
else:
    class User(BaseModel):
        """
        This is the class for user Attributes:
        """
        email = ""
        password = ""
        first_name = ""
        last_name = ""
