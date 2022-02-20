"""
Created on Sun Dec  5 23:57:06 2021
"""

import numpy as np

import errors


class TimeDilation:

    def __init__(self, elapsed_time: float, velocity_of_the_object: float, unit: str = 'm/s'):
        self.del_t = elapsed_time if elapsed_time > 0 else -1
        self.v = velocity_of_the_object if velocity_of_the_object > 0 else -1
        self.c = 299792568 if unit == 'm/s' else 1 if unit == 'rel' else -1

    def __check(self):
        if self.del_t == -1:
            raise errors.LengthError('Length cannot be less than 0.')
        elif self.v == -1:
            raise errors.VelocityError('Velocity of the object cannot be less than 0.')
        elif self.c == -1:
            raise errors.UnitError('Unit not passed correctly, please use \'m/s\' or \'rel\'')

    def beta(self) -> float:
        return np.sqrt(1 - (self.v / self.c)**2)

    def time_dilation(self) -> float:
        _sqrt = np.sqrt(1 - (self.v / self.c)**2)
        return self.del_t / _sqrt
