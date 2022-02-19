#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Dec  5 23:28:20 2021

@author: Astrophysics and Python
"""

import numpy as np

class UnitError(Exception):
    pass

class LengthError(Exception):
    pass

class LengthContraction:

    def __init__(self, L0, v, unit='m/s'):
        try:
            if L0 > 0:
                self.L0 = L0
            else:
                raise LengthError
        except LengthError:
            print('Length cannot be less than 0.')
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

    def length_contraction(self):
        return self.L0*np.sqrt(1 - (self.v/self.c)**2)
