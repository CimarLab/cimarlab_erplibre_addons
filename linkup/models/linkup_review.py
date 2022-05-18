from odoo import _, api, fields, models


class LinkupReview(models.Model):
    _name = "linkup.review"
    _description = "linkup_review"

    name = fields.Char(string="Comment")
