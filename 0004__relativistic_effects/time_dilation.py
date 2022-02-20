"""
Created on Sun Dec  5 23:57:06 2021
"""
from typing import Optional

import numpy as np

from utilities import errors


class TimeDilation:

    def __init__(self, unit: str = 'm/s'):
        self.unit = unit
        self.v, self.t0, self.tc = None, None, None
        self.c = 299792568 if unit == 'm/s' else 1 if unit == 'rel' else -1

    def __check(self):
        if np.logical_or(self.t0 == -1, self.tc == -1):
            raise errors.TimeError('Time cannot be less than 0.')
        elif self.v == -1:
            raise errors.VelocityError('Velocity of the object cannot be less than 0.')
        elif self.c == -1:
            raise errors.UnitError('Unit not passed correctly, please use \'m/s\' or \'rel\'')

    def __time_dilation(self):
        return self.t0 / self.beta()

    def beta(self) -> float:
        return np.sqrt(1 - (self.v / self.c)**2)

    def time_dilation(self, time_elapsed_for_object: Optional[float], velocity_of_the_object: Optional[float]) -> float:
        self.t0, self.v = time_elapsed_for_object, velocity_of_the_object

        self.__check()

        return self.__time_dilation()

    def solver(self, time_elapsed_for_object: Optional[float], time_elapsed_for_observer: Optional[float], velocity_of_the_object: Optional[float]) -> float:
        self.v = velocity_of_the_object
        self.t0 = time_elapsed_for_object
        self.tc = time_elapsed_for_observer

        self.__check()

        return [self.__time_dilation() if self.tc is None else
                self.tc * self.beta() if self.t0 is None else
                self.c * np.sqrt(1 - (self.t0 / self.tc)**2) if np.logical_and(self.v is None, self.unit == 'm/s') else np.sqrt(1 - (self.t0 / self.tc)**2)][0]
