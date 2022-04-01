odoo.define("linkup_snippet.animation", function (require) {
    "use strict";

    var sAnimation = require("website.content.snippets.animation");

    sAnimation.registry.linkup_snippet = sAnimation.Class.extend({
        selector: ".o_linkup_snippet",

        start: function () {
            var self = this;
            var def = this._rpc({ route: "/linkup_snippet/helloworld" }).then(
                function (data) {
                    if (data.error) {
                        return;
                    }

                    if (_.isEmpty(data)) {
                        return;
                    }

                    var data_json = data;
                    var hello = data_json["hello"];
                    self.$(".linkup_snippet_value").text(hello);
                }
            );

            return $.when(this._super.apply(this, arguments), def);
        },
    });
});
