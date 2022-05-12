odoo.define("chat_snippet.animation", function (require) {
    "use strict";

    let sAnimation = require("website.content.snippets.animation");

    sAnimation.registry.chat_snippet = sAnimation.Class.extend({
        selector: ".o_chat_snippet",

        start: function () {
            let self = this;
            this._eventList = this.$(".chat_snippet_value");
            this._originalContent = this._eventList.text();
            let def = this._rpc({ route: "/chat_snippet/helloworld" }).then(
                function (data) {
                    if (data.error) {
                        return;
                    }

                    if (_.isEmpty(data)) {
                        return;
                    }

                    self._$loadedContent = $(data);
                    self._eventList.text(data["hello"]);
                }
            );

            return $.when(this._super.apply(this, arguments), def);
        },
        destroy: function () {
            this._super.apply(this, arguments);
            if (this._$loadedContent) {
                this._eventList.text(this._originalContent);
            }
        },
    });
});
