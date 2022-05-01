"""
Created on Sun Dec  5 23:28:20 2021
"""

from typing import Optional

import numpy as np

from utilities import errors


class LengthContraction:

    def __init__(self, unit: str = 'm/s'):
        self.unit = unit
        self.v, self.l0, self.lr = None, None, None
        self.c = 299792458 if unit == 'm/s' else 1 if self.unit == 'rel' else -1

    def __check(self):
        if np.logical_or(self.l0 == -1, self.lr == -1):
            raise errors.LengthError('Length cannot be less than 0.')
        elif self.v == -1:
            raise errors.VelocityError('Velocity of the object cannot be less than 0.')
        elif self.c == -1:
            raise errors.UnitError('Unit not passed correctly, please use '
                                   '\'m/s\' or \'rel\'')

    def __length_contraction(self):
        return self.l0 * self.beta()

    def __inverse_beta(self) -> float:
        return np.sqrt(1 - (self.lr / self.l0)**2)

    def beta(self) -> float:
        return np.sqrt(1 - (self.v / self.c)**2)

    def length_contraction(self, rest_length: float, velocity: float) -> float:
        self.l0, self.v = rest_length, velocity

        self.__check()

        return self.__length_contraction()

    def solver(self, rest_length: Optional[float] = None,
               relativistic_length: Optional[float] = None,
               velocity: Optional[float] = None) -> float:

        self.l0, self.lr, self.v = rest_length, relativistic_length, velocity

        self.__check()

        return [self.__length_contraction() if self.lr is None else
                self.lr / self.beta() if self.l0 is None else
                self.c * self.__inverse_beta() if self.v is None and self.unit == 'm/s'
                else self.__inverse_beta()][0]
