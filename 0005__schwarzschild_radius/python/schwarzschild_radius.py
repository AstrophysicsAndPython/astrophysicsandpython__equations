"""
Created on Feb 28 23:41:48 2022
"""

from typing import Optional

import astropy.units as u
from astropy.constants.codata2018 import c, G

import utilities


def calculate_schwarzschild_radius(mass_of_the_object: float, display_units=False):
    utilities.__check_errors(M=mass_of_the_object)

    _val = 2 * G * mass_of_the_object * u.kg * c**-2

    return _val if display_units else _val.value


def solver(mass_of_the_object: Optional[float] = None, schwarzschild_radius: Optional[float] = None, display_units=False):
    M, rs = mass_of_the_object, schwarzschild_radius

    utilities.__check_errors(M=M, rs=rs)

    out = rs * c**2 * 0.5 * G**-1 if M is None else calculate_schwarzschild_radius(M, True)

    return out if display_units else out.value
