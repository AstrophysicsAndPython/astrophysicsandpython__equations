#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Dec  5 23:57:06 2021

@author: Astrophysics and Python
"""

import numpy as np

class UnitError(Exception):
    pass

class TimeError(Exception):
    pass

class TimeDilation:

    def __init__(self, delT, v, unit='m/s'):
        try:
            if delT > 0:
                self.delT = delT
            else:
                raise TimeError
        except TimeError:
            print('Time cannot be less than 0.')
        self.v = v
        try:
            if unit == 'm/s':
                self.c = 299792458
            elif unit == 'rel':
                self.c = 1
            else:
                raise UnitError
        except UnitError:
            print('Unit not passed correctly, please use \'m/s\' or \'rel\'')

    def time_dilation(self):
        _sqrt = np.sqrt(1 - (self.v/self.c)**2)
        return self.delT/_sqrt
