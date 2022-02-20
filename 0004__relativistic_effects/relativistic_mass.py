"""
Created on Mon Dec  6 00:00:08 2021
"""

import numpy as np

import errors


class RelativisticMass:

    def __init__(self, mass_of_the_object: float, velocity_of_the_object: float, unit: str = 'm/s'):
        self.m0 = mass_of_the_object if mass_of_the_object > 0 else -1
        self.v = velocity_of_the_object if velocity_of_the_object > 0 else -1
        self.c = 299792458 if unit == 'm/s' else 1 if unit == 'rel' else -1

    def __check(self):
        if self.m0 == -1:
            raise errors.LengthError('Length cannot be less than 0.')
        elif self.v == -1:
            raise errors.VelocityError('Velocity of the object cannot be less than 0.')
        elif self.c == -1:
            raise errors.UnitError('Unit not passed correctly, please use \'m/s\' or \'rel\'')

    def beta(self) -> float:
        return np.sqrt(1 - (self.v / self.c)**2)

    def relativistic_mass(self) -> float:
        self.__check()

        return self.m0 / self.beta()
