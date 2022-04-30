"""
Created on Sun Dec  5 23:57:06 2021
"""
from typing import Optional

import numpy as np

from utilities import errors


class TimeDilation:

    def __init__(self, unit: str = 'm/s'):
        self.unit = unit
        self.v, self.t0, self.tr = None, None, None
        self.c = 299792458 if unit == 'm/s' else 1 if unit == 'rel' else -1

    def __check(self):
        if np.logical_or(self.t0 == -1, self.tr == -1):
            raise errors.TimeError('Time cannot be less than 0.')
        elif self.v == -1:
            raise errors.VelocityError('Velocity of the object cannot be less than 0.')
        elif self.c == -1:
            raise errors.UnitError('Unit not passed correctly, please use '
                                   '\'m/s\' or \'rel\'')

    def __time_dilation(self):
        return self.t0 / self.beta()

    def __inverse_beta(self):
        return np.sqrt(1 - (self.t0 / self.tr)**2)

    def beta(self) -> float:
        return np.sqrt(1 - (self.v / self.c)**2)

    def time_dilation(self, rest_frame_time: Optional[float],
                      velocity: Optional[float]) -> float:
        self.t0, self.v = rest_frame_time, velocity

        self.__check()

        return self.__time_dilation()

    def solver(self, rest_frame_time: Optional[float],
               relativistic_frame_time: Optional[float],
               velocity: Optional[float]) -> float:
        self.t0, self.tr, self.v = rest_frame_time, relativistic_frame_time, velocity

        self.__check()

        return [self.__time_dilation() if self.tr is None else
                self.tr * self.beta() if self.t0 is None else
                self.c * self.__inverse_beta() if self.v is None and self.unit == 'm/s'
                else self.__inverse_beta()][0]
