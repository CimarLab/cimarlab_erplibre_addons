from odoo import http
from odoo.http import request


class LienSnippetController(http.Controller):
    @http.route(
        ["/lien_snippet/helloworld"],
        type="json",
        auth="public",
        website=True,
        methods=["POST", "GET"],
        csrf=False,
    )
    def hello_world(self):
        return {"hello": "Hello World!"}
