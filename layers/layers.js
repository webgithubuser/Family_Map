var wms_layers = [];

        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });var format_BuchholzFamilybirthplacesplaces_1 = new ol.format.GeoJSON();
var features_BuchholzFamilybirthplacesplaces_1 = format_BuchholzFamilybirthplacesplaces_1.readFeatures(json_BuchholzFamilybirthplacesplaces_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BuchholzFamilybirthplacesplaces_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_BuchholzFamilybirthplacesplaces_1.addFeatures(features_BuchholzFamilybirthplacesplaces_1);var lyr_BuchholzFamilybirthplacesplaces_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BuchholzFamilybirthplacesplaces_1, 
                style: style_BuchholzFamilybirthplacesplaces_1,
    title: 'Buchholz-Family-birth-places - places<br />\
    <img src="styles/legend/BuchholzFamilybirthplacesplaces_1_0.png" />  1.0 - 5.0 <br />\
    <img src="styles/legend/BuchholzFamilybirthplacesplaces_1_1.png" />  5.0 - 9.0 <br />\
    <img src="styles/legend/BuchholzFamilybirthplacesplaces_1_2.png" />  9.0 - 13.0 <br />'
        });

lyr_ESRIWorldTopo_0.setVisible(true);lyr_BuchholzFamilybirthplacesplaces_1.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_BuchholzFamilybirthplacesplaces_1];
lyr_BuchholzFamilybirthplacesplaces_1.set('fieldAliases', {'Place-name': 'Place-name', 'Lat': 'Lat', 'long': 'long', 'count': 'count', 'URL': 'URL', });
lyr_BuchholzFamilybirthplacesplaces_1.set('fieldImages', {'Place-name': 'TextEdit', 'Lat': 'TextEdit', 'long': 'TextEdit', 'count': 'Range', 'URL': 'TextEdit', });
lyr_BuchholzFamilybirthplacesplaces_1.set('fieldLabels', {'Place-name': 'no label', 'Lat': 'no label', 'long': 'no label', 'count': 'inline label', 'URL': 'no label', });
lyr_BuchholzFamilybirthplacesplaces_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});