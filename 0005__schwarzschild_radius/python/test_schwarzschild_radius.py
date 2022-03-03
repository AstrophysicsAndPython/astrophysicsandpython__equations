"""
Created on Mar 01 00:56:49 2022
"""

import unittest

import schwarzschild_radius


class SchwarzschildRadiusTests(unittest.TestCase):

    def test_calculate_schwarzschild_radius(self):
        self.assertEqual(schwarzschild_radius.calculate_schwarzschild_radius(2e30), 2970.464107647466, 'Something is wrong')

    def test_solver1(self):
        self.assertEqual(schwarzschild_radius.solver(2e30, None, False), 2970.464107647466, 'Check the expression of schwarzschild radius return')

    def test_solver2(self):
        self.assertEqual(schwarzschild_radius.solver(None, 2970.464107647466, False), 2e30, 'Check the expression of Mass return')


if __name__ == '__main__':
    unittest.main()
