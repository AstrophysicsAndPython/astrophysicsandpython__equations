#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Nov 24 00:07:07 2021

@author: Astrophysics and Python
"""

import astropy.units as asu
import astropy.constants as asc

class Constants:
    speed_of_light = asc.c
    Newton_G = asc.G
    planck_constant = asc.h

    def convert(value, unit):
        return value.to(unit)

    def to_cgs(value):
        return value.cgs
