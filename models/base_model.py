#!/usr/bin/python3
"""
AirBnB---This script is the base model
"""
import uuid
import models
from os import environ
from datetime import datetime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, String, DateTime

s = "HBNB_TYPE_STORAGE"

Base = declarative_base()
class BaseModel:
    """
    This is the class that will define all the common
        attributes/methods
        for every other classes
    """
    if s in environ.keys() and environ["HBNB_TYPE_STORAGE"] == "db":
        id = Column(
            String(60),
            primary_key=True,
            nullable=False,
            unique=True,
            default=str(
                uuid.uuid4()))
        created_at = Column(
            DateTime,
            nullable=False,
            default=datetime.utcnow())
        updated_at = Column(
            DateTime,
            nullable=False,
            default=datetime.utcnow())
    """
    Class from which all other classes will inherit
    """
    def __init__(self, *args, **kwargs):
        '''
        Instantiation of base model class
        '''
        cs = "HBNB_TYPE_STORAGE"
        if kwargs:
            self.id = str(uuid.uuid4())
            self.created_at = self.updated_at = datetime.now()
            for key, value in kwargs.items():
                if key == "created_at" or key == "updated_at":
                    value = datetime.strptime(value, "%Y-%m-%dT%H:%M:%S.%f")
                if key != "__class__":
                    setattr(self, key, value)
        elif cs not in environ.keys() or environ["HBNB_TYPE_STORAGE"] != "db":
            self.id = str(uuid.uuid4())
            self.created_at = self.updated_at = datetime.now()
            models.storage.new(self)
        else:
            self.id = str(uuid.uuid4())

    def __str__(self):
        """
        Returns official string representation
        """
        return "[{}] ({}) {}".\
            format(type(self).__name__, self.id, self.__dict__)

    def to_dict(self):
        """
        returns a dictionary containing all keys/values of __dict__
        """
        my_dict = dict(self.__dict__)
        my_dict["__class__"] = str(type(self).__name__)
        my_dict["updated_at"] = self.updated_at.isoformat()
        my_dict["created_at"] = self.created_at.isoformat()
        if "_sa_instance_state" in my_dict.keys():
            del my_dict["_sa_instance_state"]
            models.storage.save()
        return my_dict

    def save(self):
        """
        updates the public instance attribute updated_at
        """
        self.updated_at = datetime.now()
        models.storage.new(self)
        models.storage.save()

    def __repr__(self):
        '''
        Returns the string representaion
        '''
        return self.__str__()

    def delete(self):
        models.storage.delete(self)
        models.storage.save()