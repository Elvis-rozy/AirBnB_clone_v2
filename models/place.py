#!/usr/bin/python3
"""
This module creates a Place class
"""
from models.base_model import BaseModel, Base
from sqlalchemy.orm import relationship
from uuid import uuid4
from sqlalchemy import Column, String, ForeignKey, Integer, Float, Table
from os import environ

s = "HBNB_TYPE_STORAGE"

place_amenity = Table(
    Base.metadata,
    'place_amenity',
    Column(
        'amenity_id',
        String(60),
        ForeignKey('amenities.id'),
        nullable=False),
    Column(
        'place_id',
        String(60),
        ForeignKey('places.id'),
        nullable=False))

if s in environ.keys() and environ["HBNB_TYPE_STORAGE"] == "db":
    class Place(BaseModel, Base):
        """
        Class for Place Attributes:
        name: name input
        city_id: city id
        user_id: user id
        description: string of description
        latitude: latitude in flaot
        longitude: longitude in float
        number_rooms: number of room in int
        max_guest: maximum guest in int
        amenity_ids: list of Amenity ids
        price_by_night:: pice for a staying in int
        number_bathrooms: number of bathrooms in int
        """
        __tablename__ = "places"
        name = Column(String(128), nullable=False)
        city_id = Column(String(60), ForeignKey('cities.id'), nullable=False)
        user_id = Column(String(60), ForeignKey('users.id'), nullable=False)
        description = Column(String(1024), nullable=True)
        latitude = Column(Float, nullable=True)
        longitude = Column(Float, nullable=True)
        number_rooms = Column(Integer, nullable=False, default=0)
        max_guest = Column(Integer, nullable=False, default=0)
        amenities = relationship("Amenity",
                                 secondary=place_amenity, viewonly=False)
        price_by_night = Column(Integer, nullable=False, default=0)
        number_bathrooms = Column(Integer, nullable=False, default=0)

        def __init__(self, **kwargs):
            setattr(self, "id", str(uuid4()))
            for k, v in kwargs.items():
                setattr(self, k, v)
else:
    class Place(BaseModel):
        """
        Class for Place Objects:
            name: name input
            city_id: city id
            user_id: user id
            description: string of description
            latitude: latitude in flaot
            longitude: longitude in float
            number_rooms: number of room in int
            max_guest: maximum guest in int
            amenity_ids: list of Amenity ids
            price_by_night:: pice for a staying in int
            number_bathrooms: number of bathrooms in int
        """
        city_id = ""
        user_id = ""
        name = ""
        description = ""
        number_rooms = 0
        number_bathrooms = 0
        max_guest = 0
        price_by_night = 0
        latitude = 0.0
        longitude = 0.0
        amenity_ids = []

        @property
        def reviews(self):
            all_reviews = models.storage.all(Review)
            liste = []
            keys = all_review.items()
            for i, j in keys:
                if "Review" == i[0:4] and j.place_id == self.id:
                    liste.append(j)
            return(liste)