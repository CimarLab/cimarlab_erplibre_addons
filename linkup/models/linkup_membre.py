from odoo import _, api, fields, models


class LinkupMembre(models.Model):
    _name = "linkup.membre"
    _description = "linkup_membre"

    name = fields.Char()

    review_id = fields.Many2one(comodel_name="linkup.review")

    energy = fields.Integer()
