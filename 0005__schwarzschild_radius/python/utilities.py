"""
Created on Mar 01 00:41:09 2022
"""

from typing import Optional


class NegativeMass(Exception):
    pass


class NegativeRadius(Exception):
    pass


def __check_errors(M: Optional[float] = None, rs: Optional[float] = None):
    if M is not None and M < 0:
        raise NegativeMass('Mass cannot be negative.')
    if rs is not None and rs < 0:
        raise NegativeRadius('Radius cannot be negative.')
