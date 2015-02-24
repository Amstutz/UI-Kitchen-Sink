DataManagement = function(){
    var elements;
    var elementsByIndex;
    var tab_dropdown_template;
    var tab_dropdown_entry_template;
    var entry_template;

    this.loadData = function(callback){
        var self = this;
        self.elementsByIndex = {};

        $.getJSON("/data/elements.json")
            .done(function( json ) {
                self.elements = json.CompenentsList;
                $.get("components/templates/tab_dropdown.html", function(markup){
                    self.tab_dropdown_template = _.template(markup);
                    $.get("components/templates/tab_dropdown_entry.html", function(markup){
                        self.tab_dropdown_entry_template = _.template(markup);
                        $.get("components/templates/entry.html", function(markup){
                            self.entry_template = _.template(markup);
                            callback();
                        });
                    });
                });
            })
            .fail(function( jqxhr, textStatus, error ) {
                var err = textStatus + ", " + error;
                console.log( "Request Failed: " + err );
            });
    };

    this.adaptContent = function(self, content_id){
        items = self.elementsByIndex[content_id];
        $("#ilMainContent").html("");

        console.log(items);
        console.log(content_id);
        console.log( self.elementsByIndex);
        $.each(items["SubItems"], function(index, value) {
            entry = self.entry_template({
                Index:index,
                Title: value.Title,
                Description: value.Description,
                LessVariables: value.LessVariables,
                GUIClass: value.GUIClass,
                Context: value.Context,
                KnownUses: value.KnownUses,
                Relations: value.Relations,

            });
            $("#ilMainContent").append(entry).find("#"+index+"HtmlExample").load(value.Path);
        });
    };

    this.initTabs = function(callback){
        tabs = "";
        var self = this;
        $.each(this.elements, function(index, value) {
            dropdown = self.tab_dropdown_template({Index: index,Title: value.Title});
            $( "#Tablist" ).append(dropdown);
            var dropdownIndex = "#"+index+"_list";
            $.each(value.Items, function(index, value) {
                dropdown_entry = self.tab_dropdown_entry_template({Index: index,Title: value.Title});
                $(dropdownIndex).append(dropdown_entry);
                self.elementsByIndex[index] = value;

            });
        });

        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            self.adaptContent(self,$(e.target).attr('href') );
        });
        callback();
    };

}

