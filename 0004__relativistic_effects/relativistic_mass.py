#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Dec  6 00:00:08 2021

@author: Astrophysics and Python
"""

import numpy as np

class UnitError(Exception):
    pass

class MassError(Exception):
    pass

class RelativisticMass:

    def __init__(self, m0, v, unit='m/s'):
        try:
            if m0 > 0:
                self.m0 = m0
            else:
                raise MassError
        except MassError:
            print('Mass must be > 0')
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

    def relativistic_mass(self):
        _sqrt = np.sqrt(1 - (self.v/self.c)**2)
        return self.m0/_sqrt
