"""
Created on Mon Dec  6 00:00:08 2021
"""

from typing import Optional

import numpy as np

from utilities import errors


class RelativisticMass:

    def __init__(self, unit: str = 'm/s'):
        self.unit = unit
        self.v, self.m0, self.mc = None, None, None
        self.c = 299792458 if unit == 'm/s' else 1 if unit == 'rel' else -1

    def __check(self):
        if np.logical_or(self.m0 == -1, self.mc == -1):
            raise errors.MassError('Mass cannot be less than 0.')
        elif self.v == -1:
            raise errors.VelocityError('Velocity of the object cannot be less than 0.')
        elif self.c == -1:
            raise errors.UnitError('Unit not passed correctly, please use \'m/s\' or \'rel\'')

    def __relativistic_mass(self):
        return self.m0 / self.beta()

    def beta(self) -> float:
        return np.sqrt(1 - (self.v / self.c)**2)

    def relativistic_mass(self, mass_of_the_object: Optional[float], velocity_of_the_object: Optional[float]) -> float:
        self.m0, self.v = mass_of_the_object, velocity_of_the_object

        self.__check()

        return self.__relativistic_mass()

    def solver(self, mass_of_the_object: Optional[float], relativistic_mass: Optional[float], velocity_of_the_object: Optional[float]) -> float:
        self.v = velocity_of_the_object
        self.m0 = mass_of_the_object
        self.mc = relativistic_mass

        self.__check()

        return [self.__relativistic_mass() if self.mc is None else
                self.mc * self.beta() if self.m0 is None else
                self.c * np.sqrt(1 - (self.m0 / self.mc)**2) if np.logical_and(self.v is None, self.unit == 'm/s') else np.sqrt(1 - (self.m0 / self.mc)**2)][0]
