"""
Created on Feb 20 17:36:55 2022
"""


class RelativisticErrors(Exception):
    pass


class UnitError(RelativisticErrors):
    pass


class LengthError(RelativisticErrors):
    pass


class VelocityError(RelativisticErrors):
    pass


class MassError(RelativisticErrors):
    pass


class TimeError(RelativisticErrors):
    pass
