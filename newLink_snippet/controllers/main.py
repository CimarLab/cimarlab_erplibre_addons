from odoo import http
from odoo.http import request


class NewlinkSnippetController(http.Controller):
    @http.route(
        ["/newLink_snippet/helloworld"],
        type="json",
        auth="public",
        website=True,
        methods=["POST", "GET"],
        csrf=False,
    )
    def hello_world(self):
        return {"hello": "Hello World!"}
