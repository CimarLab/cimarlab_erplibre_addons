from odoo import http
from odoo.http import request


class CimarlabDemoWebsiteSnippetController(http.Controller):
    @http.route(
        ["/cimarlab_demo_website_snippet/helloworld"],
        type="json",
        auth="public",
        website=True,
        methods=["POST", "GET"],
        csrf=False,
    )
    def hello_world(self):
        return {"hello": "Hello World!"}
