"""
Created on Mon Dec  6 00:00:08 2021
"""

from typing import Optional

import numpy as np

from utilities import errors


class RelativisticMass:

    def __init__(self, unit: str = 'm/s'):
        self.unit = unit
        self.v, self.m0, self.mr = None, None, None
        self.c = 299792458 if unit == 'm/s' else 1 if unit == 'rel' else -1

    def __check(self):
        if np.logical_or(self.m0 == -1, self.mr == -1):
            raise errors.MassError('Mass cannot be less than 0.')
        elif self.v == -1:
            raise errors.VelocityError('Velocity of the object cannot be less than 0.')
        elif self.c == -1:
            raise errors.UnitError('Unit not passed correctly, please use \'m/s\' or \'rel\'')

    def __inverse_beta(self) -> float:
        return np.sqrt(1 - (self.m0 / self.mr)**2)

    def __relativistic_mass(self):
        return self.m0 / self.beta()

    def beta(self) -> float:
        return np.sqrt(1 - (self.v / self.c)**2)

    def find_relativistic_mass(self, rest_mass: Optional[float], velocity: Optional[float]) -> float:
        self.m0, self.v = rest_mass, velocity

        self.__check()

        return self.__relativistic_mass()

    def solver(self, rest_mass: Optional[float] = None, relativistic_mass: Optional[float] = None, velocity: Optional[float] = None) -> float:
        self.v, self.m0, self.mr = velocity, rest_mass, relativistic_mass

        self.__check()

        return [self.__relativistic_mass() if self.mr is None else
                self.mr * self.beta() if self.m0 is None else
                self.c * self.__inverse_beta() if np.logical_and(self.v is None, self.unit == 'm/s') else self.__inverse_beta()][0]
