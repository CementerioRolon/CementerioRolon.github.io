var wms_layers = [];


        var lyr_hibrido_0 = new ol.layer.Tile({
            'title': 'hibrido',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var lyr_Ortofoto_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ortofoto",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Ortofoto_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7059254.483745, -4461595.279877, -7059089.576119, -4461453.304766]
                            })
                        });
var format_prueba4entities_2 = new ol.format.GeoJSON();
var features_prueba4entities_2 = format_prueba4entities_2.readFeatures(json_prueba4entities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_prueba4entities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_prueba4entities_2.addFeatures(features_prueba4entities_2);
var lyr_prueba4entities_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_prueba4entities_2, 
                style: style_prueba4entities_2,
                interactive: false,
                title: '<img src="styles/legend/prueba4entities_2.png" /> prueba4 entities'
            });
var format_Parcelas_3 = new ol.format.GeoJSON();
var features_Parcelas_3 = format_Parcelas_3.readFeatures(json_Parcelas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelas_3.addFeatures(features_Parcelas_3);
var lyr_Parcelas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcelas_3, 
                style: style_Parcelas_3,
                interactive: false,
                title: 'Parcelas'
            });
var format_blanco_4 = new ol.format.GeoJSON();
var features_blanco_4 = format_blanco_4.readFeatures(json_blanco_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_blanco_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_blanco_4.addFeatures(features_blanco_4);
var lyr_blanco_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_blanco_4, 
                style: style_blanco_4,
                interactive: true,
                title: '<img src="styles/legend/blanco_4.png" /> blanco'
            });

lyr_hibrido_0.setVisible(true);lyr_Ortofoto_1.setVisible(true);lyr_prueba4entities_2.setVisible(true);lyr_Parcelas_3.setVisible(true);lyr_blanco_4.setVisible(true);
var layersList = [lyr_hibrido_0,lyr_Ortofoto_1,lyr_prueba4entities_2,lyr_Parcelas_3,lyr_blanco_4];
lyr_prueba4entities_2.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Parcelas_3.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_blanco_4.set('fieldAliases', {'-': '-', });
lyr_prueba4entities_2.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Parcelas_3.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_blanco_4.set('fieldImages', {'-': 'TextEdit', });
lyr_prueba4entities_2.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_Parcelas_3.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'header label', });
lyr_blanco_4.set('fieldLabels', {'-': 'no label', });
lyr_blanco_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});