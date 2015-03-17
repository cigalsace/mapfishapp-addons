OpacitySlider ADDON
===================

**This version of _opacityslider_ is only compatible with geOrchestra 14.01 and below**

This addon allows users to manage background layers into mapfishapp. A slider between 2 combo box
of opaque layers allows the user to switch the transparency between 2 bases layers. It also restrict the use
of the manageLayers panel to behave more like a fully integrated background layers panel.
authors: @fgravin


The addon config should look like this:

   {
        "id": "opacityslider_0",
        "name": "OpacitySlider",
        "title": {
            "en": "Map opacity slider",
            "es": "Map opacity slider",
            "fr": "Opacité fonds de carte"
        },
        "description": {
            "en": "Opacity Slider between to list of backgrounds layers",
            "es": "Opacity Slider between to list of backgrounds layers",
            "fr": "Slider gérant un fondu transparent entre 2 couches de fonds choisies parmis des listes"
        },
        "options": {
        	"layers": [{
                url: "http://ns3271887.ovh.net/geoserver/cigalsace/wms",
                name: "BD_Ortho_2011_RVB"
            },{
	        	url: "http://sdi.georchestra.org/geoserver/wms",
	        	name: "nasa:srtm3"
	        },{
	        	url: "http://sdi.georchestra.org/geoserver/wms",
	        	name: "nasa:srtm3_shade"
	        },{
	        	url: "http://sdi.georchestra.org/geoserver/wms",
	        	name: "nasa:night_2012"
	        },{
	        	url: "http://sdi.georchestra.org/geoserver/wms",
	        	name: "osm:bing"
	        }]
        }
