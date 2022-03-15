odoo.define("cimarlab_demo_website_snippet.animation", function (require) {
    "use strict";

    var sAnimation = require("website.content.snippets.animation");

    sAnimation.registry.cimarlab_demo_website_snippet = sAnimation.Class.extend(
        {
            selector: ".o_cimarlab_demo_website_snippet",

            start: function () {
                var self = this;
                var def = this._rpc({
                    route: "/cimarlab_demo_website_snippet/helloworld",
                }).then(function (data) {
                    if (data.error) {
                        return;
                    }

                    if (_.isEmpty(data)) {
                        return;
                    }

                    var data_json = data;
                    var hello = data_json["hello"];
                    self.$(".cimarlab_demo_website_snippet_value").text(hello);
                });

                return $.when(this._super.apply(this, arguments), def);
            },
        }
    );
});
