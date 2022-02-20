"""
Created on Sun Dec  5 23:28:20 2021
"""

from typing import Optional

import numpy as np

from utilities import errors


class LengthContraction:

    def __init__(self, unit: str = 'm/s'):
        self.unit = unit
        self.v, self.l0, self.lc = None, None, None
        self.c = 299792458 if self.unit == '/ms' else 1 if self.unit == 'rel' else -1

    def __check(self):
        if np.logical_or(self.l0 == -1, self.lc == -1):
            raise errors.LengthError('Length cannot be less than 0.')
        elif self.v == -1:
            raise errors.VelocityError('Velocity of the object cannot be less than 0.')
        elif self.c == -1:
            raise errors.UnitError('Unit not passed correctly, please use \'m/s\' or \'rel\'')

    def __length_contraction(self):
        return self.l0 * self.beta()

    def beta(self) -> float:
        return np.sqrt(1 - (self.v / self.c)**2)

    def length_contraction(self, length_of_the_object: float, velocity_of_the_object: float) -> float:
        self.l0, self.v = length_of_the_object, velocity_of_the_object

        self.__check()

        return self.__length_contraction()

    def solver(self, original_length_of_the_object: Optional[float], measured_length_of_the_object: Optional[float], velocity_of_the_object: Optional[float]) -> float:
        self.v = velocity_of_the_object
        self.l0 = original_length_of_the_object
        self.lc = measured_length_of_the_object

        self.__check()

        return [self.__length_contraction() if self.lc is None else
                self.lc / self.beta() if self.l0 is None else
                self.c * np.sqrt(1 - (self.lc / self.l0)**2) if np.logical_and(self.v is None, self.unit == 'm/s') else np.sqrt(1 - (self.lc / self.l0)**2)][0]
