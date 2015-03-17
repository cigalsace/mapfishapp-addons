Ext.namespace("GEOR.Addons");

GEOR.Addons.OpacitySlider = function(map, options) {
    this.map = map;
    this.options = options;
    this.control = null;
    this.item = null;
    this.toolbar = null;
    this.container = null;
};

// If required, may extend or compose with Ext.util.Observable
//Ext.extend(GEOR.Addons.Annotation, Ext.util.Observable, {
GEOR.Addons.OpacitySlider.prototype = {
    /**
     * Method: init
     *
     * Parameters:
     * record - {Ext.data.record} a record with the addon parameters
     */
    init: function(record) {

        var lang = OpenLayers.Lang.getCode(),
            item = new Ext.menu.CheckItem({
                text: record.get("title")[lang] || record.get("title")["fr"],
                qtip: record.get("description")[lang] || record.get("description")["fr"],
                checked: true,
                canActivate: false,
                listeners: {
                    "checkchange": this.onCheckchange,
                    scope: this
                }
            });
        this.create();
        this.item = item;
        return item;
    },

    /**
     * Method: onCheckchange
     * Callback on checkbox state changed
     */
    onCheckchange: function(item, checked) {
        if (checked) {
            this.create();
        } else {
            this.remove();
        }
    },
    
    create: function() {
        var mapPanel = GeoExt.MapPanel.guess();
        
        this.toolbar = new GEOR.MapOpacitySlider({
            map: this.map,
            cls: 'opacityToolbar',
            layersCfg: this.options.layers
        });
        
        this.container = Ext.DomHelper.append(mapPanel.bwrap, {
            tag: 'div',
            cls: 'baseLayersOpacitySlider'
        }, true );
        
        this.toolbar.render(this.container);
        this.toolbar.doLayout();
        var totalWidth = 0;
        this.toolbar.items.each(function(item) {
            totalWidth += item.getWidth() + 8;
        });
        this.container.setWidth(totalWidth);
        this.container.setStyle({'marginLeft': (-totalWidth / 2) + 'px'});
    },
    
    remove: function() {
        this.toolbar.cleanAddon();
        this.toolbar.destroy();
        this.container.remove();
    },

    /**
     * Method: destroy
     * Called by GEOR_tools when deselecting this addon
     */
    destroy: function() {
        this.remove();
        this.control = null;
        this.map = null;
    }
};
